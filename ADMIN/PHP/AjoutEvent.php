<?php
require_once('/QueryAdmin.php');

    $lines = array();
    $query = new QueryAdmin();

    $titre=$_POST['titre'];
    $date=$_POST['date'];
    $link=$_POST['link'];
    $description=$_POST['description'];


    $lines = $query->addEvent($titre,$date,$link,$description);
    echo json_encode($lines);