<?php
require_once('../QueryAdmin.php');

try {
    $lines = array();
    $query = new QueryAdmin();
    
    $lines = $query->deleteTeacher($_POST['matricule']);
    echo json_encode($lines);

    unlink($dir);
}
catch(PDOException $e) {
    return $lines;
}