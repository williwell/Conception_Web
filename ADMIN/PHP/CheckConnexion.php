<?php
session_start();

require_once('QueryAdmin.php');

$query = new QueryAdmin();



if(isset($_SESSION["user"])){
    $lines = $query->CheckConnexion($_SESSION["user"]);

    if (is_array($lines))
    {
        if(password_verify($_SESSION["mdp"],$lines[0][1]))
        {
            echo json_encode(TRUE);
        }
        else
        {
            echo json_encode(FALSE);
        }
    }
    else
    {
        echo json_encode(FALSE);
    }
}
else
{
    echo json_encode(FALSE);
}

