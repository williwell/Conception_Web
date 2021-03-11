<?php
require_once('QueryAdmin.php');

$lines = array();
$query = new QueryAdmin();

$lines = $query->getEvent();
echo json_encode($lines);