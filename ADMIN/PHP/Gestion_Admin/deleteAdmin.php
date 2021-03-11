<?php
require_once('../QueryAdmin.php');

try {
    $lines = array();
    $query = new QueryAdmin();
    
    $lines = $query->deleteAdmin($_POST['user']);
    echo json_encode($lines);
}
catch(PDOException $e) {
    return $lines;
}