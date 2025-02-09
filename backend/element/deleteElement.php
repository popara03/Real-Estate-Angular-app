<?php
    include('../functions.php');

    //Dohvatanje podataka iz tela zahteva
    $json = file_get_contents('php://input');
    //JSON u asocijativni niz
    $data = json_decode($json, true);

    try{
        $query = "DELETE FROM element WHERE id = $data";
        $conn->query($query);
        http_response_code(204);
    }
    catch(Exception $e){
        http_response_code(500);
        echo(json_encode(($e->getMessage())));
    }
?>