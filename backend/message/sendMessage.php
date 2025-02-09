<?php
    include('../functions.php');

    //Dohvatanje podataka iz tela zahteva
    $json = file_get_contents('php://input');
    //JSON u asocijativni niz
    $data = json_decode($json, true);

    try{
        insert('message', $data);
    }
    catch(Exception $e){
        http_response_code(500);
        echo json_encode("There was an error. Please try again.");
    }
?>