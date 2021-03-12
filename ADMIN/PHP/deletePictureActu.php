<?php
require_once('QueryAdmin.php');

$lines = array();
$query = new QueryAdmin();

try{
    $lines = $query->getActualite();
    $dir = new DirectoryIterator("../../RESSOURCES/Photo_Actu");
    foreach ($dir as $fileinfo) {
        $delete = 1;
        if (!$fileinfo->isDot()) {
            for($i = 0; $i < count($lines); $i++){
                $fileName = $lines[$i][3];
                if($fileinfo->getFilename() != 'no_image.png'){
                    if($fileName == $fileinfo->getFilename()){
                        $delete = 0;
                    }
                }
                else{
                    $delete = 0;
                }
            }
            if($delete == 1){
                unlink("../../RESSOURCES/Photo_Actu/".$fileinfo);
            }
        }
    }
    
}

catch(PDOException $e)
{
    echo json_encode($e);
}