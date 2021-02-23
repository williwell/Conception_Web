<?php
require_once('Query.php');

$user = $_POST["user"];
$mdp = password_hash($_POST["mdp"], PASSWORD_DEFAULT);

$query = new Query();

$result = $query->creerComtpe($user,$mdp);
echo json_encode($result);