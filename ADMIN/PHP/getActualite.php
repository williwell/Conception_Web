<?php
require_once('QueryAdmin.php');

$lines = array();
$query = new QueryAdmin();

$lines = $query->getActualite();
echo json_encode($lines);