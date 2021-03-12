<?php
require_once('../QueryAdmin.php');

$lines = array();
$query = new QueryAdmin();

$lines = $query->getAllLink();
echo json_encode($lines);