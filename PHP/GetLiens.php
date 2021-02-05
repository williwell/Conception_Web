<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$lines = $query->getLink();
echo json_encode($lines);