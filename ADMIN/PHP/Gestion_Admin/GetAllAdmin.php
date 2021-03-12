<?php
require_once('../QueryAdmin.php');

$lines = array();
$query = new QueryAdmin();

$lines = $query->getAllAdmin();
echo json_encode($lines);