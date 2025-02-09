<?php
    include('../functions.php');

    try{
        $mainQuery = "
        SELECT
            p.id AS property_id,
            p.title,
            p.address,
            p.total_area,
            p.price,
            p.price_fixed,
            p.img,
            p.description,
            p.floors,
            p.garden,
            p.owner_email,
            p.owner_phone,
            s.name AS state_name,
            c.name AS city_name
        FROM 
            property p
        JOIN state s ON p.state_id = s.id
        JOIN city c ON p.city_id = c.id;
        ";

        $bedroomsQuery = "
        SELECT 
            b.id AS bedroom_id,
            b.area AS bedroom_area,
            e.id AS element_id,
            e.name AS element_name
        FROM 
            property_bedroom pb
        JOIN bedroom b ON pb.bedroom_id = b.id
        LEFT JOIN bedroom_element be ON b.id = be.bedroom_id
        LEFT JOIN element e ON be.element_id = e.id
        WHERE 
            pb.property_id = ?;
        ";

        $kichensQuery = "
        SELECT 
            k.id AS kitchen_id,
            k.area AS kitchen_area,
            e.id AS element_id,
            e.name AS element_name
        FROM 
            property_kitchen pk
        JOIN kitchen k ON pk.kitchen_id = k.id
        LEFT JOIN kitchen_element ke ON k.id = ke.kitchen_id
        LEFT JOIN element e ON ke.element_id = e.id
        WHERE 
            pk.property_id = ?;
        ";

        $bathroomsQuery = "
        SELECT 
            ba.id AS bathroom_id,
            ba.area AS bathroom_area,
            e.id AS element_id,
            e.name AS element_name
        FROM 
            property_bathroom pba
        JOIN bathroom ba ON pba.bathroom_id = ba.id
        LEFT JOIN bathroom_element bae ON ba.id = bae.bathroom_id
        LEFT JOIN element e ON bae.element_id = e.id
        WHERE 
            pba.property_id = ?;
        ";

        $garagesQuery = "
        SELECT 
            g.id AS garage_id,
            g.area AS garage_area
        FROM 
            property_garage pg
        JOIN garage g ON pg.garage_id = g.id
        WHERE 
            pg.property_id = ?;
        ";

        $poolsQuery = "
        SELECT 
            po.id AS pool_id,
            po.area AS pool_area
        FROM 
            property_pool pp
        JOIN pool po ON pp.pool_id = po.id
        WHERE 
            pp.property_id = ?;
        ";

        //izvrsavanje main querija
        $properties = $conn->query($mainQuery)->fetchAll();

        //izvrsavanje svih podupita i izgradnja response niza
        foreach ($properties as &$property) {
            $propertyId = $property['property_id'];
        
            // Spavaće sobe
            $bedroomsStmt = $conn->prepare($bedroomsQuery);
            $bedroomsStmt->execute([$propertyId]);
            $bedroomResults = $bedroomsStmt->fetchAll();

            $bedrooms = [];
            foreach ($bedroomResults as $bedroom) {
                $bedroomId = $bedroom['bedroom_id'];
                if (!isset($bedrooms[$bedroomId])) {
                    $bedrooms[$bedroomId] = [
                        'id' => $bedroomId,
                        'area' => $bedroom['bedroom_area'],
                        'elements' => []
                    ];
                }
                $bedrooms[$bedroomId]['elements'][] = [
                    'element_id' => $bedroom['element_id'],
                    'element_name' => $bedroom['element_name']
                ];
            }
            $property['bedrooms'] = array_values($bedrooms); // Resetujte indekse niza
        
            // Kuhinje
            $kitchensStmt = $conn->prepare($kichensQuery);
            $kitchensStmt->execute([$propertyId]);
            $kitchenResults = $kitchensStmt->fetchAll();

            $kitchens = [];
            foreach ($kitchenResults as $kitchen) {
                $kitchenId = $kitchen['kitchen_id'];
                if (!isset($kitchens[$kitchenId])) {
                    $kitchens[$kitchenId] = [
                        'id' => $kitchenId,
                        'area' => $kitchen['kitchen_area'],
                        'elements' => []
                    ];
                }
                $kitchens[$kitchenId]['elements'][] = [
                    'element_id' => $kitchen['element_id'],
                    'element_name' => $kitchen['element_name']
                ];
            }
            $property['kitchens'] = array_values($kitchens); // Resetujte indekse niza

            // Kupatila
            $bathroomsStmt = $conn->prepare($bathroomsQuery);
            $bathroomsStmt->execute([$propertyId]);
            $bathroomResults = $bathroomsStmt->fetchAll();

            $bathrooms = [];
            foreach ($bathroomResults as $bathroom) {
                $bathroomId = $bathroom['bathroom_id'];
                if (!isset($bathrooms[$bathroomId])) {
                    $bathrooms[$bathroomId] = [
                        'id' => $bathroomId,
                        'area' => $bathroom['bathroom_area'],
                        'elements' => []
                    ];
                }
                $bathrooms[$bathroomId]['elements'][] = [
                    'element_id' => $bathroom['element_id'],
                    'element_name' => $bathroom['element_name']
                ];
            }
            $property['bathrooms'] = array_values($bathrooms); // Resetujte indekse niza

            // Garaže
            $garagesStmt = $conn->prepare($garagesQuery);
            $garagesStmt->execute([$propertyId]);
            $garageResults = $garagesStmt->fetchAll();

            $garages = [];
            foreach ($garageResults as $garage) {
                $garages[] = [
                    'id' => $garage['garage_id'],
                    'area' => $garage['garage_area']
                ];
            }
            $property['garages'] = $garages;

            // Bazen
            $poolsStmt = $conn->prepare($poolsQuery);
            $poolsStmt->execute([$propertyId]);
            $poolResults = $poolsStmt->fetchAll();

            $pools = [];
            foreach ($poolResults as $pool) {
                $pools[] = [
                    'id' => $pool['pool_id'],
                    'area' => $pool['pool_area']
                ];
            }
            $property['pools'] = $pools;
        }
        unset($property);

        http_response_code(200);
        echo json_encode($properties);
    }
    catch(Exception $e){
        http_response_code(500);
        echo json_encode($e->getMessage());
    }
?>