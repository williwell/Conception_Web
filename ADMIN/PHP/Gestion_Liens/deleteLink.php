<?php
require_once('../QueryAdmin.php');

try {
    $lines = array();
    $query = new QueryAdmin();
    
    $lines = $query->deleteLink($_POST['id']);
    echo json_encode($lines);

}
catch(PDOException $e) {
    return $lines;
}