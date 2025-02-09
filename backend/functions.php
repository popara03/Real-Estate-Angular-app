<?php
    include('connection.php');

    function selectAll($table){
        global $conn;
        $query = "SELECT * FROM $table";
        $result = $conn->query($query)->fetchAll();
        return $result;
    }

    function selectOneById($table, $id){
        global $conn;
        
        try{
            $query = "SELECT * FROM $table WHERE id = :id";
            $stmt = $conn->prepare($query);
            $stmt->bindParam(':id', $id);
            
            $stmt->execute();
            
            http_response_code(200);
            $result = $stmt->fetch();
            echo $result;
        }
        catch(Exception $e){
            http_response_code($e->getCode());
            echo json_encode($e->getMessage());
        }
    }

    function selectOneByName($table, $name){
        global $conn;

        try{
            $query = "SELECT * FROM $table WHERE name = :name";
            $stmt = $conn->prepare($query);
            $stmt->bindParam(':name', $name);
            
            $stmt->execute();
            
            http_response_code(200);
            $result = $stmt->fetch();
            return $result;
        }
        catch(Exception $e){
            http_response_code($e->getCode());
            echo json_encode($e->getMessage());
        }

    }

    function insert($table, $data, $noMessage = false){
        global $conn;

        try{
            $keys = array_keys($data);
            $values = array_values($data);

            $query = "INSERT INTO $table (".implode(',', $keys).") VALUES ('".implode("','", $values)."')";
            
            $stmt = $conn->prepare($query);
            $stmt->execute();

            http_response_code(201);
            if(!$noMessage)
            echo json_encode('Added successfully.');
        }
        catch(Exception $e){
            http_response_code(500);
            echo json_encode($e->getMessage());
        }
    }

    function update($table, $data, $id, $noMessage = false){
        global $conn;
        
        try{
            $keys = array_keys($data);
            $values = array_values($data);

            $query = "UPDATE $table SET ";
            for($i = 0; $i < count($keys); $i++){
                $query .= $keys[$i]." = '".$values[$i]."'";
                if($i < count($keys) - 1){
                    $query .= ', ';
                }
            }
            $query .= " WHERE id = $id";

            $conn->query($query);

            http_response_code(200);
            if(!$noMessage)
            echo json_encode('Updated successfully.');
        }
        catch(Exception $e){
            http_response_code(500);
            echo json_encode($e->getMessage());
        }
    }

    function delete($table, $id, $noMessage = false){
        global $conn;
        
        try{
            $query = "DELETE FROM $table WHERE id = $id";
            $conn->query($query);

            http_response_code(200);
            if(!$noMessage)
            echo json_encode('Deleted successfully.');
        }
        catch(Exception $e){
            http_response_code(500);
            echo json_encode($e->getMessage());
        }
    }

    function login($email, $password){
        global $conn;
        $query = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
        $result = $conn->query($query)->fetch();
        return $result;
    }

    function register($data){
        global $conn;
        $keys = array_keys($data);
        $values = array_values($data);
        $query = "INSERT INTO users (".implode(',', $keys).") VALUES ('".implode("','", $values)."')";
        $conn->query($query);
    }
?>