<?php
require_once('../QueryAdmin.php');

    $lines = array();
    $query = new QueryAdmin();

    $user="admin";
    $mdp="admin";

    $mdp = password_hash($mdp, PASSWORD_DEFAULT);

    $lines = $query->addAdmin($user,$mdp);
    echo json_encode($lines);