<?php
require_once('../QueryAdmin.php');

    $lines = array();
    $query = new QueryAdmin();

    $user=$_POST['user'];
    $mdp=$_POST['mdp'];

    $mdp = password_hash($mdp, PASSWORD_DEFAULT);

    $lines = $query->updateAdmin($user,$mdp);
    echo json_encode($lines);