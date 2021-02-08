<?php
require_once('Query.php');

$query = new Query();

$result = $query->creerComtpe();
echo json_encode($result);