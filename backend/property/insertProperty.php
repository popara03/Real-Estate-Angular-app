<?php
    include('../functions.php');

    $data = $_POST;

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
            http_response_code(403);
            die("You must upload a file.");
        }

        //insert property
        $ngPublicFolderPath = '/assets/image/houses/';

        $property = array(
            'title' => $data['title'],
            'description' => $data['description'],
            'img' => $ngPublicFolderPath . $imgName,
            'state_id' => $data['stateId'],
            'city_id' => $data['cityId'],
            'address' => $data['address'],
            'total_area' => calculateTotalArea(),
            'price' => $data['price'],
            'price_fixed' => $data['priceFixed'],
            'owner_email' => $data['ownerEmail'],
            'owner_phone' => $data['ownerPhone'],
            'floors' => $data['floors'],
            'garden' => $data['gardenArea'],
        );

        insert('property', $property, true);

        //id prethodno unetog property-ja
        $property_id = $conn->lastInsertId();

        //////////////////////////////////////////

        //insert bedroom
        foreach(json_decode($data['bedrooms']) as $b){
            $bedroom = array(
                'area' => $b->area,
            );

            insert('bedroom', $bedroom, true);

            //id prethodno unetog bedroom-a
            $bedroom_id = $conn->lastInsertId();

            //vezujemo bedroom za property kome pripada
            $property_bedroom = array(
                'property_id' => $property_id,
                'bedroom_id' => $bedroom_id
            );

            insert('property_bedroom', $property_bedroom, true);

            //posle bedroom inserta dodaju mu se elementi
            foreach($b->elements as $e){
                $element = array(
                    'bedroom_id' => $bedroom_id,
                    'element_id' => $e->id
                );
                insert('bedroom_element', $element, true);
            }
        }

        //////////////////////////////////////////

        //insert kitchen
        foreach(json_decode($data['kitchens']) as $k){
            $kitchen = array(
                'area' => $k->area,
            );

            insert('kitchen', $kitchen, true);

            //id prethodno unetog kitchen-a
            $kitchen_id = $conn->lastInsertId();

            //vezujemo kitchen za property kome pripada
            $property_kitchen = array(
                'property_id' => $property_id,
                'kitchen_id' => $kitchen_id
            );

            insert('property_kitchen', $property_kitchen, true);

            //posle kitchen inserta dodaju mu se elementi
            foreach($k->elements as $e){
                $element = array(
                    'kitchen_id' => $kitchen_id,
                    'element_id' => $e->id
                );
                insert('kitchen_element', $element, true);
            }
        }

        //////////////////////////////////////////

        //insert bathroom
        foreach(json_decode($data['bathrooms']) as $b){
            $bathroom = array(
                'area' => $b->area,
            );

            insert('bathroom', $bathroom, true);

            //id prethodno unetog bathroom-a
            $bathroom_id = $conn->lastInsertId();

            //vezujemo bathroom za property kome pripada
            $property_bathroom = array(
                'property_id' => $property_id,
                'bathroom_id' => $bathroom_id
            );

            insert('property_bathroom', $property_bathroom, true);

            //posle bathroom inserta dodaju mu se elementi
            foreach($b->elements as $e){
                $element = array(
                    'bathroom_id' => $bathroom_id,
                    'element_id' => $e->id
                );
                insert('bathroom_element', $element, true);
            }
        }

        //////////////////////////////////////////

        //insert garage
        if(isset($data['garages'])){
            foreach(json_decode($data['garages']) as $g){
                $garage = array(
                    'area' => $g->area,
                );
    
                insert('garage', $garage, true);
    
                $garage_id = $conn->lastInsertId();
    
                //vezujemo garage za property kome pripada
                $property_garage = array(
                    'property_id' => $property_id,
                    'garage_id' => $garage_id
                );
    
                insert('property_garage', $property_garage, true);
            }
        }

        //////////////////////////////////////////

        //insert pool
        if(isset($data['pools'])){
            foreach(json_decode($data['pools']) as $p){
                $pool = array(
                    'area' => $p->area,
                );
    
                insert('pool', $pool, true);
    
                //id prethodno unetog pool-a
                $pool_id = $conn->lastInsertId();
    
                //vezujemo pool za property kome pripada
                $property_pool = array(
                    'property_id' => $property_id,
                    'pool_id' => $pool_id
                );
    
                insert('property_pool', $property_pool, true);
            }
        }

        http_response_code(201);
        echo json_encode('Property added successfully.');
    }
    catch(PDOException $e){
        echo json_encode($e->getMessage());
        http_response_code(500);
    }
?>