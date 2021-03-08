<?php
session_start();
require_once('Query.php');

$user = $_POST["user"];
$mdp = $_POST["mdp"];

$query = new Query();

$lines = $query->getConnexion($user);

if (is_array($lines))
{
    if(password_verify($mdp,$lines[0][1]))
    {
        $_SESSION["user"] = $user;
        $_SESSION["mdp"] = $mdp;
        $_SESSION["last_activity"] = time();
        echo json_encode(TRUE);
    }
    else
    {
        echo json_encode(FALSE);
    }
}
else
{
    echo json_encode(FALSE);
}