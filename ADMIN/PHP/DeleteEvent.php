<?php
require_once('QueryAdmin.php');

try {
    $lines = array();
    $query = new QueryAdmin();
    
    $lines = $query->deleteEvent($_POST['noEvent']);
    echo json_encode($lines);
}
catch(PDOException $e) {
    return $lines;
}