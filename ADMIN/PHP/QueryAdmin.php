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
 
    function updateTeacher($matricule,$prenom,$nom,$typeEmploi,$courriel,$telephone,$poste)
    {
        $lines = array();
        try {
            $request = "UPDATE enseignant SET Prenom='".$prenom."', Nom = '".$nom."', Type_Employer = '".$typeEmploi."', Courriel = '".$courriel."', Telephone = '".$telephone."', Poste = ".$poste." WHERE Matricule = ".$matricule;
            $this->connexion->exec($request);

            return $request;
        }
        catch(PDOException $e) {
            return $e;
        }
    }

    function updateTeacher($matricule,$prenom,$nom,$typeEmploi,$courriel,$telephone,$poste)
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
 

}