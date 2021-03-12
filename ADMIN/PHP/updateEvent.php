<?php
require_once('QueryAdmin.php');

try {
    $lines = array();
    $query = new QueryAdmin();

    $num=$_POST['num'];
    $name=$_POST['name'];
    $date=$_POST['date'];
    $link=$_POST['link'];
    $description=$_POST['description'];
    
    $lines = $query->updateEvent($num,$name,$date,$link,$description);
    echo json_encode($lines);

}
catch(PDOException $e) {
    return $lines;
}