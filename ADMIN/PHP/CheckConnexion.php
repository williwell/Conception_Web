<?php
session_start();

require_once('QueryAdmin.php');

$query = new QueryAdmin();

if(isset($_SESSION["last_activity"]) && (time() - $_SESSION["last_activity"] < 1800)){
    
    $_SESSION["last_activity"] = time();
    
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
    session_unset();
    session_destroy();
    echo json_encode(FALSE);
}

