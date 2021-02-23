<?php
require_once('ConnexionDBAdmin.php');

class QueryAdmin
{
    private $connexion;

    public function __construct()
    {
        $constants = new ConnexionDBAdmin();
        $this->connexion = $constants->getConnexion();
    }


    function deleteTeacher($matricule)
    {
        $lines = array();
        try {
            $request = "DELETE FROM enseignant WHERE Matricule LIKE ".$matricule;
            $result = $this->connexion->exec($request);
 
            return $request;
        }
        catch(PDOException $e) {
            return $e;
        }
    }
 
    function updateTeacher($matricule,$prenom,$nom,$typeEmploi,$courriel,$telephone,$poste, $fileTemp)
    {
        try
       {
        $coverDirectory="../../RESSOURCES/PHOTO_ENSEIGNANT/";
           if (!move_uploaded_file($fileTemp, $coverDirectory)) {
               return "file error";
           } else {
            $request = "UPDATE enseignant SET Prenom='".$prenom."', Nom = '".$nom."', Type_Employer = '".$typeEmploi."', Courriel = '".$courriel."', Telephone = '".$telephone."', Poste = ".$poste." WHERE Matricule = ".$matricule;
            $this->connexion->exec($request);

            return "pk";
           }
       }
       catch(PDOException $e) {
           return $e;
       }
    }

    function addTeacher($matricule,$prenom,$nom,$typeEmploi,$courriel,$telephone,$poste)
    {
        $lines = array();
        try {
            $request = "INSERT INTO enseignant VALUES($matricule,$prenom,$nom,$typeEmploi,$courriel,$telephone,$poste)";
            $this->connexion->exec($request);

            return $request;
        }
        catch(PDOException $e) {
            return $e;
        }
    }
 
    function CheckConnexion($user)
    {
        $lines = array();
        try {
            $request = "SELECT * FROM compte WHERE User = $user";
            $result = $this->connexion->query($request);
            $lines = $result->fetchAll();
 
            return $lines;
        }
        catch(PDOException $e) {
            return $e;
        }
    }
}