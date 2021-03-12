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

    function deleteEvent($noevent)
    {
        $lines = array();
        try {
            $request = "DELETE FROM events WHERE noEvent LIKE ".$noevent;
            $result = $this->connexion->exec($request);
 
            return $result;
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

    function getEvent():array
   {
       $lines = array();
       try {
           $request = "SELECT * FROM events Order by dateE";
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();

           return $lines;
       }
       catch(PDOException $e) {
           return $lines;
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

    function getAllAdmin(){
        $lines = array();
        try{
            $request = "SELECT * FROM compte";
            $result = $this->connexion->query($request);
            $lines = $result->fetchAll();
            return $lines;
        }
        catch(PDOException $e) {
            return $e;
        }
    }

    function getAllLink(){
        $lines = array();
        try{
            $request = "SELECT * FROM liens";
            $result = $this->connexion->query($request);
            $lines = $result->fetchAll();
            return $lines;
        }
        catch(PDOException $e) {
            return $e;
        }
    }

    function addLink($type,$description,$lien,$personne)
    {
        try{
            $request = "INSERT INTO liens (ID, Categorie, Description, Lien, Personne) VALUES ('', '".$type."', '".$description."', '".$lien."', '".$personne."')";
            $result = $this->connexion->exec($request);

            return true;
        }
        catch(PDOException $e) {
            return false;
        }
    }

    
    function updateLink($id,$type,$description,$lien,$personne)
    {
        try{
            $request = "UPDATE liens SET Categorie = '".$type."', Description = '".$description."', Lien = '".$lien."', Personne = '".$personne."' WHERE ID = '".$id."'";
            $result = $this->connexion->exec($request);
            return "ok";
        }
        catch(PDOException $e) {
            return $e;
        }
    }

    function deleteLink($id)
    {
        try{
            $request = "DELETE FROM liens WHERE ID = '".$id."'";
            $result = $this->connexion->exec($request);
            return "ok";
        }
        catch(PDOException $e) {
            return $e;
        }
    }

    function getOneLink($id)
    {
        $lines = array();
        try{
            $request = "SELECT * FROM liens WHERE ID = '".$id."'";
            $result = $this->connexion->query($request);
            $lines = $result->fetchAll();
            return $lines;
        }
        catch(PDOException $e) {
            return $e;
        }
    }

}