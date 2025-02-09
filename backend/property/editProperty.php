<?php
    include('../functions.php');
    global $conn;

    //////////////////////////////////////////

    //data iz forme za update
    $data = $_POST;

    //dohvatanje property-a koji se edituje iz baze
    try {
        //trenutna data u bazi za property koji se edituje
        $currentProperty;

        $propertyId = $data['property_id'];
    
        // Upit za dohvatanje osnovnih informacija o property-u
        $mainQuery = "
        SELECT
            p.id AS property_id,
            p.title,
            p.address,
            p.total_area,
            p.price,
            p.price_fixed,
            p.img,
            p.floors,
            p.description,
            p.garden,
            s.name AS state_name,
            s.id AS state_id,
            c.name AS city_name,
            c.id AS city_id,
            p.owner_email,
            p.owner_phone
        FROM 
            property p
        JOIN state s ON p.state_id = s.id
        JOIN city c ON p.city_id = c.id
        WHERE 
            p.id = ?;
        ";
    
        // Priprema i izvršenje glavnog upita
        $stmt = $conn->prepare($mainQuery);
        $stmt->execute([$propertyId]);
        $property = $stmt->fetch(PDO::FETCH_ASSOC);
    
        if (!$property) {
            throw new Exception("Property not found.");
        }
    
        // Upiti za različite delove nekretnine
        $componentQueries = [
            'bedrooms' => "SELECT b.id AS id, b.area AS area, e.id AS element_id, e.name AS element_name FROM property_bedroom pb JOIN bedroom b ON pb.bedroom_id = b.id LEFT JOIN bedroom_element be ON b.id = be.bedroom_id LEFT JOIN element e ON be.element_id = e.id WHERE pb.property_id = ?",
            'kitchens' => "SELECT k.id AS id, k.area AS area, e.id AS element_id, e.name AS element_name FROM property_kitchen pk JOIN kitchen k ON pk.kitchen_id = k.id LEFT JOIN kitchen_element ke ON k.id = ke.kitchen_id LEFT JOIN element e ON ke.element_id = e.id WHERE pk.property_id = ?",
            'bathrooms' => "SELECT ba.id AS id, ba.area AS area, e.id AS element_id, e.name AS element_name FROM property_bathroom pba JOIN bathroom ba ON pba.bathroom_id = ba.id LEFT JOIN bathroom_element bae ON ba.id = bae.bathroom_id LEFT JOIN element e ON bae.element_id = e.id WHERE pba.property_id = ?",
            'garages' => "SELECT g.id AS id, g.area AS area FROM property_garage pg JOIN garage g ON pg.garage_id = g.id WHERE pg.property_id = ?",
            'pools' => "SELECT po.id AS id, po.area AS area FROM property_pool pp JOIN pool po ON pp.pool_id = po.id WHERE pp.property_id = ?"
        ];
    
        foreach ($componentQueries as $key => $sql) {
            $stmt = $conn->prepare($sql);
            $stmt->execute([$propertyId]);
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            $property[$key] = [];
            foreach ($results as $item) {
                $itemId = $item['id'];
                if (!isset($property[$key][$itemId])) {
                    $property[$key][$itemId] = [
                        'id' => $itemId,
                        'area' => $item['area'],
                        'elements' => []
                    ];
                }
                if (isset($item['element_id'])) {
                    $property[$key][$itemId]['elements'][] = [
                        'id' => $item['element_id'],
                        'name' => $item['element_name']
                    ];
                }
            }
            $property[$key] = array_values($property[$key]);
        }
    
        http_response_code(200);
        $currentProperty = $property;
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }

    //////////////////////////////////////////

    //total area f-ja
    function calculateTotalArea(){
        global $data;

        $totalArea = $data['gardenArea'];
        
        if(isset($data['bedrooms'])){
            foreach(json_decode($data['bedrooms']) as $b){
                $totalArea += $b->area;
            }
        }

        if(isset($data['kitchens'])){
            foreach(json_decode($data['kitchens']) as $k){
                $totalArea += $k->area;
            }
        }

        if(isset($data['garages'])){
            foreach(json_decode($data['garages']) as $g){
                $totalArea += $g->area;
            }
        }

        if(isset($data['pools'])){
            foreach(json_decode($data['pools']) as $p){
                $totalArea += $p->area;
            }
        }
        
        return $totalArea;
    }

    //////////////////////////////////////////

    try{
        //upload img
        $ngPublicFolderPath = '/assets/image/houses/';

        if(isset($_FILES['image'])){
            $img = $_FILES['image'];
    
            $imgName = $img['name'];
            $imgTmpName = $img['tmp_name'];
            
            //extension
            $img_exploded = explode('.', $imgName);
            $img_extension = strtolower(end($img_exploded));
            $allowed = array('jpg', 'jpeg', 'png', 'webp');
    
            $imgFolderPath = '../../projekat/public/assets/image/houses/';
    
            if(in_array($img_extension, $allowed)){
                if(!move_uploaded_file($imgTmpName, $imgFolderPath . $imgName)){
                    http_response_code(500);
                    die("There was an error uploading your file.");
                }
            }
            else{
                http_response_code(409);
                die("You cannot upload files of this type.");
            }
        }
        else{
            $imgName = str_replace($ngPublicFolderPath, '', $currentProperty['img']);
        }

        //insert property
        $property = array(
            'title' => $data['title'],
            'description' => $data['description'],
            'img' => $ngPublicFolderPath . $imgName,
            'state_id' => $data['stateId'],
            'city_id' => $data['cityId'],
            'address' => $data['address'],
            'total_area' => calculateTotalArea(),
            'price' => $data['price'],
            'price_fixed' => ($data['priceFixed'] === 'true') ? '1' : '0', // Pretvori u integer 0 ili 1
            'owner_email' => $data['ownerEmail'],
            'owner_phone' => $data['ownerPhone'],
            'floors' => $data['floors'],
            'garden' => $data['gardenArea'],
        );

        update('property', $property, $data['property_id'], true);

        //////////////////////////////////////////

        //bedrooms

        $updatedBedrooms = json_decode($data['bedrooms']);
        $updatedBedroomIds = array_filter(array_map(function($b) {
            return isset($b->id) ? $b->id : null;
        }, $updatedBedrooms));

        // Ako nema soba u ažuriranim podacima, obriši sve postojeće
        if (empty($updatedBedrooms)) {
            foreach ($currentProperty['bedrooms'] as $currentBedroom) {
                delete('bedroom', $currentBedroom['id'], true);
            }
        } else {
            // Brisanje starih soba koje nisu u ažuriranim podacima
            foreach ($currentProperty['bedrooms'] as $currentBedroom) {
                if (!in_array($currentBedroom['id'], $updatedBedroomIds)) {
                    delete('bedroom', $currentBedroom['id'], true);
                }
            }

            // Dodavanje novih soba
            foreach($updatedBedrooms as $b) {
                if (!isset($b->id)) { 
                    insert('bedroom', ['area' => $b->area], true);
                
                    $lastBedroomId = $conn->lastInsertId();

                    insert('property_bedroom', ['property_id' => $data['property_id'], 'bedroom_id' => $lastBedroomId], true);

                    foreach($b->elements as $e){
                        insert('bedroom_element', ['bedroom_id' => $lastBedroomId, 'element_id' => $e->id], true);
                    }
                }
            }
        }

        //////////////////////////////////////////

        //kitchens

        $updatedKitchens = json_decode($data['kitchens']);
        $updatedKitchenIds = array_filter(array_map(function($k) {
            return isset($k->id) ? $k->id : null;
        }, $updatedKitchens));

        // Ako nema kuhinja u ažuriranim podacima, obriši sve postojeće
        if (empty($updatedKitchens)) {
            foreach ($currentProperty['kitchens'] as $currentKitchen) {
                delete('kitchen', $currentKitchen['id'], true);
            }
        } else {
            // Brisanje starih soba koje nisu u ažuriranim podacima
            foreach ($currentProperty['kitchens'] as $currentKitchen) {
                if (!in_array($currentKitchen['id'], $updatedKitchenIds)) {
                    delete('kitchen', $currentKitchen['id'], true);
                }
            }

            // Dodavanje novih
            foreach($updatedKitchens as $k) {
                if (!isset($k->id)) { 
                    insert('kitchen', ['area' => $k->area], true);
                
                    $lastKitchenId = $conn->lastInsertId();

                    insert('property_kitchen', ['property_id' => $data['property_id'], 'kitchen_id' => $lastKitchenId], true);

                    foreach($k->elements as $e){
                        insert('kitchen_element', ['kitchen_id' => $lastKitchenId, 'element_id' => $e->id], true);
                    }
                }
            }
        }

        //////////////////////////////////////////

        //bathrooms

        $updatedBathrooms = json_decode($data['bathrooms']);
        $updatedBathroomIds = array_filter(array_map(function($ba) {
            return isset($ba->id) ? $ba->id : null;
        }, $updatedBathrooms));

        // Ako nema kupatila u ažuriranim podacima, obriši sve postojeće
        if (empty($updatedBathrooms)) {
            foreach ($currentProperty['bathrooms'] as $currentBathroom) {
                delete('bathroom', $currentBathroom['id'], true);
            }
        } else {
            // Brisanje starih kupatila koja nisu u ažuriranim podacima
            foreach ($currentProperty['bathrooms'] as $currentBathroom) {
                if (!in_array($currentBathroom['id'], $updatedBathroomIds)) {
                    delete('bathroom', $currentBathroom['id'], true);
                }
            }

            // Dodavanje novih kupatila
            foreach($updatedBathrooms as $ba) {
                if (!isset($ba->id)) { 
                    insert('bathroom', ['area' => $ba->area], true);
                
                    $lastBathroomId = $conn->lastInsertId();

                    insert('property_bathroom', ['property_id' => $data['property_id'], 'bathroom_id' => $lastBathroomId], true);

                    foreach($ba->elements as $e){
                        insert('bathroom_element', ['bathroom_id' => $lastBathroomId, 'element_id' => $e->id], true);
                    }
                }
            }
        }

        //////////////////////////////////////////

        //garages

        $updatedGarages = json_decode($data['garages']);
        $updatedGarageIds = array_filter(array_map(function($g) {
            return isset($g->id) ? $g->id : null;
        }, $updatedGarages));

        // Ako nema garaža u ažuriranim podacima, obriši sve postojeće
        if (empty($updatedGarages)) {
            foreach ($currentProperty['garages'] as $currentGarage) {
                delete('garage', $currentGarage['id'], true);
            }
        } else {
            // Brisanje starih garaža koje nisu u ažuriranim podacima
            foreach ($currentProperty['garages'] as $currentGarage) {
                if (!in_array($currentGarage['id'], $updatedGarageIds)) {
                    delete('garage', $currentGarage['id'], true);
                }
            }

            // Dodavanje novih garaža ili ažuriranje postojećih
            foreach($updatedGarages as $g) {
                if (!isset($g->id)) { 
                    insert('garage', ['area' => $g->area], true);
                    $lastGarageId = $conn->lastInsertId();
                    insert('property_garage', ['property_id' => $data['property_id'], 'garage_id' => $lastGarageId], true);
                }
            }
        }

        //////////////////////////////////////////

        //pools

        $updatedPools = json_decode($data['pools']);
        $updatedPoolIds = array_filter(array_map(function($p) {
            return isset($p->id) ? $p->id : null;
        }, $updatedPools));

        // Ako nema bazena u ažuriranim podacima, obriši sve postojeće
        if (empty($updatedPools)) {
            foreach ($currentProperty['pools'] as $currentPool) {
                delete('pool', $currentPool['id'], true);
            }
        } else {
            // Brisanje starih bazena koji nisu u ažuriranim podacima
            foreach ($currentProperty['pools'] as $currentPool) {
                if (!in_array($currentPool['id'], $updatedPoolIds)) {
                    delete('pool', $currentPool['id'], true);
                }
            }

            // Dodavanje novih bazena ili ažuriranje postojećih
            foreach($updatedPools as $p) {
                if (!isset($p->id)) { 
                    insert('pool', ['area' => $p->area], true);
                    $lastPoolId = $conn->lastInsertId();
                    insert('property_pool', ['property_id' => $data['property_id'], 'pool_id' => $lastPoolId], true);
                }
            }
        }

        //////////////////////////////////////////
        http_response_code(201);
        echo json_encode('Property updated successfully.');
    }
    catch(PDOException $e){
        echo json_encode($e->getMessage());
        http_response_code(500);
    }
?>