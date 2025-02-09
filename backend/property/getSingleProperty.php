<?php
include('../functions.php');

try {
    // Dohvatanje ID-a property-a iz URL-a
    $propertyId = isset($_GET['id']) ? intval($_GET['id']) : 0;
    if (!$propertyId) {
        throw new Exception("Property ID is required.");
    }

    // Upit za dohvatanje osnovnih informacija o property-u
    $mainQuery = "
    SELECT
        p.id AS property_id,
        p.title,
        p.address,
        p.total_area,
        p.price,
        p.price_fixed,
        p.img,
        p.floors,
        p.description,
        p.garden,
        s.name AS state_name,
        s.id AS state_id,
        c.name AS city_name,
        c.id AS city_id,
        p.owner_email,
        p.owner_phone
    FROM 
        property p
    JOIN state s ON p.state_id = s.id
    JOIN city c ON p.city_id = c.id
    WHERE 
        p.id = ?;
    ";

    // Priprema i izvršenje glavnog upita
    $stmt = $conn->prepare($mainQuery);
    $stmt->execute([$propertyId]);
    $property = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$property) {
        throw new Exception("Property not found.");
    }

    // Upiti za različite delove nekretnine
    $componentQueries = [
        'bedrooms' => "SELECT b.id AS id, b.area AS area, e.id AS element_id, e.name AS element_name FROM property_bedroom pb JOIN bedroom b ON pb.bedroom_id = b.id LEFT JOIN bedroom_element be ON b.id = be.bedroom_id LEFT JOIN element e ON be.element_id = e.id WHERE pb.property_id = ?",
        'kitchens' => "SELECT k.id AS id, k.area AS area, e.id AS element_id, e.name AS element_name FROM property_kitchen pk JOIN kitchen k ON pk.kitchen_id = k.id LEFT JOIN kitchen_element ke ON k.id = ke.kitchen_id LEFT JOIN element e ON ke.element_id = e.id WHERE pk.property_id = ?",
        'bathrooms' => "SELECT ba.id AS id, ba.area AS area, e.id AS element_id, e.name AS element_name FROM property_bathroom pba JOIN bathroom ba ON pba.bathroom_id = ba.id LEFT JOIN bathroom_element bae ON ba.id = bae.bathroom_id LEFT JOIN element e ON bae.element_id = e.id WHERE pba.property_id = ?",
        'garages' => "SELECT g.id AS id, g.area AS area FROM property_garage pg JOIN garage g ON pg.garage_id = g.id WHERE pg.property_id = ?",
        'pools' => "SELECT po.id AS id, po.area AS area FROM property_pool pp JOIN pool po ON pp.pool_id = po.id WHERE pp.property_id = ?"
    ];

    foreach ($componentQueries as $key => $sql) {
        $stmt = $conn->prepare($sql);
        $stmt->execute([$propertyId]);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        $property[$key] = [];
        foreach ($results as $item) {
            $itemId = $item['id'];
            if (!isset($property[$key][$itemId])) {
                $property[$key][$itemId] = [
                    'id' => $itemId,
                    'area' => $item['area'],
                    'elements' => []
                ];
            }
            if (isset($item['element_id'])) {
                $property[$key][$itemId]['elements'][] = [
                    'id' => $item['element_id'],
                    'name' => $item['element_name']
                ];
            }
        }
        $property[$key] = array_values($property[$key]);
    }

    http_response_code(200);
    echo json_encode($property);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
