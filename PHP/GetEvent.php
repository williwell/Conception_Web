<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$lines = $query->getEvent();
echo json_encode($lines);