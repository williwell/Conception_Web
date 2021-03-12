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
        try
       {
            $request = "UPDATE enseignant SET Prenom='".$prenom."', Nom = '".$nom."', Type_Employer = '".$typeEmploi."', Courriel = '".$courriel."', Telephone = '".$telephone."', Poste = ".$poste." WHERE Matricule = ".$matricule;
            $this->connexion->exec($request);

            return "ok";
       }
       catch(PDOException $e) {
           return $e;
       }
    }

    function addTeacher($matricule,$prenom,$nom,$typeEmploi,$courriel,$telephone,$poste)
    {
        $lines = array();
        try {
            $request = "INSERT INTO enseignant VALUES('".$matricule."','".$prenom."','".$nom."','".$typeEmploi."','".$courriel."','".$telephone."','".$poste."')";
            $this->connexion->exec($request);

            return "OK";
        }
        catch(PDOException $e) {
            return $e;
        }
    }
 
    function CheckConnexion($user)
    {
        $lines = array();
        try{
            $request = "SELECT * FROM compte WHERE User = '".$user."'";
            $result = $this->connexion->query($request);
            $lines = $result->fetchAll();
            return $lines;
        }
        catch(PDOException $e)
        {
            return $e;
        }
    }

    function addAdmin($user,$mdp)
    {
        try{
            $request = "insert into compte(User,Mdp) values('".$user."','".$mdp."')";
            $result = $this->connexion->exec($request);
            return true;
        }
        catch(PDOException $e) {
            return false;
        }
    }

    
    function updateAdmin($user,$mdp)
    {
        try{
            $request = "UPDATE compte SET Mdp = '".$mdp."' WHERE User = '".$user."'";
            $result = $this->connexion->exec($request);
            return "ok";
        }
        catch(PDOException $e) {
            return $e;
        }
    }

    function deleteAdmin($user)
    {
        try{
            $request = "DELETE FROM compte WHERE User = '".$user."'";
            $result = $this->connexion->exec($request);
            return "ok";
        }
        catch(PDOException $e) {
            return $e;
        }
    }

    function addActu($title,$texte,$photo)
    {
        try{
            $request = "insert into actualite(titreActualite,texteActu,photoActu) values('".$title."','".$texte."','".$photo."')";
            $result = $this->connexion->exec($request);
            return true;
        }
        catch(PDOException $e) {
            return false;
        }
    }

    function getActualite(){
        $lines = array();
       try {
           $request = "SELECT * FROM actualite Order by noActualite";
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();

           return $lines;
       }
       catch(PDOException $e) {
           return $lines;
       }
    }

    function deleteActu($noActu){
        $lines = array();
        try {
            $request = "DELETE FROM actualite where noActualite = '".$noActu."'";
            $result = $this->connexion->query($request);
            $lines = $result->fetchAll();
 
            return "delete";
        }
        catch(PDOException $e) {
            return $e;
        } 
    }

    function modActu($noActu,$titre,$texte,$photo){
        try{
            $request = "UPDATE actualite SET titreActualite = '".$titre."', texteActu = '".$texte."', photoActu = '".$photo."' WHERE noActualite = '".$noActu."'";
            $result = $this->connexion->exec($request);
            return "ok";
        }
        catch(PDOException $e) {
            return $e;
        }
    }

    function modActuSansPhoto($noActu,$titre,$texte){
        try{
            $request = "UPDATE actualite SET titreActualite = '".$titre."', texteActu = '".$texte."' WHERE noActualite = '".$noActu."'";
            $result = $this->connexion->exec($request);
            return "ok";
        }
        catch(PDOException $e) {
            return $e;
        }
    }
}