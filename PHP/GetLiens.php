<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$lines = $query->getLiens();
echo json_encode($lines);