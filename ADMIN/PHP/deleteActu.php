<?php
require_once('QueryAdmin.php');

$noActu = $_POST["noActu"];

$query = new QueryAdmin();

try{
    echo json_encode($query->deleteActu($noActu));
}
catch(PDOException $e)
{
    echo json_encode($e);
}