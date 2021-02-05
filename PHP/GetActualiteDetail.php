<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$lines = $query->getActualiteDetail();
echo json_encode($lines);