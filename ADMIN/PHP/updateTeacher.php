<?php
require_once('QueryAdmin.php');

try {
    $lines = array();
    $query = new QueryAdmin();

    $matricule=$_POST['matricule'];
    $prenom=$_POST['prenom'];
    $nom=$_POST['nom'];
    $typeEmploi=$_POST['typeEmployer'];
    $courriel=$_POST['courriel'];
    $telephone=$_POST['telephone'];
    $poste=$_POST['poste'];
    
    $lines = $query->updateTeacher($matricule,$prenom,$nom,$typeEmploi,$courriel,$telephone,$poste, $fileTemp);
    echo json_encode($lines);

}
catch(PDOException $e) {
    return $lines;
}