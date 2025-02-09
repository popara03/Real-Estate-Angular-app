<?php
    include('../functions.php');

    //Dohvatanje podataka iz tela zahteva
    $json = file_get_contents('php://input');
    //JSON u asocijativni niz
    $data = json_decode($json, true);

    //Provera da li red sa tim imenom vec postoji
    $exists = selectOneByName('element', $data['name']);

    if($exists){
        http_response_code(409);
        echo 'Element with that name already exists.';
        return;
    }
    else{
        insert('element', $data);
    }
?>