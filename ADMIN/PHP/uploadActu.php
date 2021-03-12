<?php
try{
    require_once('QueryAdmin.php');
        
    $query = new QueryAdmin();
    
    $title =  $_POST['titre'];
    $texte = $_POST['texte'];
    
    if ($_FILES['pic']['size'] != 0)
    {
        $fichier = basename($_FILES["pic"]["name"]);
    
        $target_dir = "../../RESSOURCES/Photo_Actu/";
        $target_file = $target_dir . $fichier;
        $uploadOk = 1;
        $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

        // Check if image file is a actual image or fake image
        if(isset($_POST["submit"])) {
          $check = getimagesize($_FILES["pic"]["tmp_name"]);
          if($check !== false) {
            echo json_encode("File is an image - " . $check["mime"] . ".");
            $uploadOk = 1;
          } else {
            echo json_encode("File is not an image.");
            $uploadOk = 0;
          }
        }
        
        
        // Check file size
        if ($_FILES["pic"]["size"] > 500000) {
          echo json_encode("Desoler, votre photo est fichier est trop volumineux.");
          $uploadOk = 0;
        }
        
        // Allow certain file formats
        if($imageFileType == "png" || $imageFileType == "jpeg" || $imageFileType == "jpg") {
          
        }
        else
        {
            echo json_encode("Seulement les photo png et jpeg sont accepter.");
            $uploadOk = 0;
        }
        
        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk != 0) {
        {
          if (move_uploaded_file($_FILES["pic"]["tmp_name"], $target_file)) {
            if($query->addActu($title,$texte,$fichier))
            {
                echo json_encode("Ajout reussit");
            }
            else{
                echo json_encode("Un erreure c'est produit lors de l'ajout de l'actualite");
            }
          } else {
            echo json_encode("Desoler un erreure c'est produit.");
          }
        }
    }
    else
    {
        if($query->addActu($title,$texte,"no_image.png"))
            {
                echo json_encode("Ajout réussit");
            }
            else{
                echo json_encode("Un erreure c'est produit lors de l'ajout de l'actualite");
            }
    } 
}
catch(PDOException $e)
{
    echo json_encode($e);
}

?>