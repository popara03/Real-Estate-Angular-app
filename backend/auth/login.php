<?php
    include('../functions.php');

    //JWT token
    require '../vendor/autoload.php';
    use \Firebase\JWT\JWT;

    //Dohvatanje podataka iz tela zahteva
    $json = file_get_contents('php://input');
    //JSON u asocijativni niz
    $data = json_decode($json, true);

    function generateToken($username){
        try {
            //decoded token
            $payload = [
                'iat' => time(),
                'exp' => time() + 3600, // Token važi 1 sat
                'username' => $username
            ];

            //secret key
            $secretKey = 'milospopara9921';

            //encoding token
            $jwt = JWT::encode($payload, $secretKey, 'HS256');

            http_response_code(200);
            echo json_encode(['token' => $jwt]);
        }
        catch (Exception $e){
            http_response_code(500);
            echo 'Error while generating token: ' . $e->getMessage();
        }
    }

    try{
        //Provera da li korisnik postoji u bazi uz preparedStatement
        $stmt = $conn->prepare("SELECT * FROM user WHERE username = ?");
        $stmt->execute([$data['username']]);

        $user = $stmt->fetch();

        //Provera da li je korisnik pronađen i da li je lozinka ispravna
        if($user && password_verify($data['pw'], $user['pw'])){
            //Kreiranje JWT tokena
            generateToken($data['username']);
        }
        else{
            http_response_code(200);
            echo json_encode(['error' => 'Invalid username or password.']);
        }

    }
    catch(PDOException $e){
        http_response_code(500);
        echo('There was an error with processing your request. Please try again later.');
    }
?>