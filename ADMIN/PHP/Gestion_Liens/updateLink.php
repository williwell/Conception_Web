<?php
require_once('../QueryAdmin.php');

    $lines = array();
    $query = new QueryAdmin();

    $id=$_POST['id'];
    $type=$_POST['type'];
    $description=$_POST['description'];
    $lien=$_POST['lien'];
    $personne=$_POST['personne'];

    $lines = $query->updateLink($id,$type,$description,$lien,$personne);
    echo json_encode($lines);