<?php
require_once('../QueryAdmin.php');

$lines = array();
$query = new QueryAdmin();

$lines = $query->getOneLink($_POST['id']);
echo json_encode($lines);