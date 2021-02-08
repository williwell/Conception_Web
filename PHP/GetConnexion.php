<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$lines = $query->getConnexion();
echo json_encode($lines);