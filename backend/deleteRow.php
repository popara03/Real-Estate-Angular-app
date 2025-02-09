<?php
    include 'functions.php';

    $table = $_GET['table'];
    $id = $_GET['id'];

    try{
        delete($table, $id);
    }
    catch(Exception $e){
        http_response_code(500);
        echo json_encode($e->getMessage());
    }
?>