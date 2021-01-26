<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$lines = $query->getTeacher();
echo json_encode($lines);