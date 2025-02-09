<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");

    try {
        $conn = new PDO("mysql:host=localhost; dbname=nekretnine;", "root", "");
    }
    catch(PDOException $e) {
        echo $e->getMessage();
    }
?>