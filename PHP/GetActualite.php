<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$lines = $query->getActualite();
echo json_encode($lines);