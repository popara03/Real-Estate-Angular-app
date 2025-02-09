<?php
    include('functions.php');

    //Dohvatanje podataka iz tela zahteva
    $json = file_get_contents('php://input');
    //JSON u asocijativni niz
    $data = json_decode($json, true);
    $table = $data['table'];
    
    $result = selectAll($table);
    
    http_response_code(200);
    echo json_encode($result);
?>