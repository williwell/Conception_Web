<?php
require_once('ConnexionDB.php');

class Query
{
    private $connexion;

    public function __construct()
    {
        $constants = new ConnexionDB();
        $this->connexion = $constants->getConnexion();
    }


   function getTeacher():array
   {
       $lines = array();
       try {
           $request = "SELECT * FROM enseignant";
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();

           return $lines;
       }
       catch(PDOException $e) {
           return $lines;
       }
   }

   function getEvent():array
   {
       $lines = array();
       try {
           $request = "SELECT * FROM events Order by dateE limit 4";
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();

           return $lines;
       }
       catch(PDOException $e) {
           return $lines;
       }
   }

   function getActualite():array
   {
       $lines = array();
       try {
           $request = "SELECT * FROM actualite Order by noActualite Desc limit 3";
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();

           return $lines;
       }
       catch(PDOException $e) {
           return $lines;
       }
   }

   function getActualiteDetail():array
   {
       $lines = array();
       try {
           $request = "SELECT * FROM actualite Order by noActualite Desc limit 20";
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();

           return $lines;
       }
       catch(PDOException $e) {
           return $lines;
       }
   }

   function getConnexion($user,$mdp):string
   {
       $lines = array();
       try {
           $request = "SELECT COUNT(*) FROM compte WHERE User = $user and Mdp = '$mdp'";
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();

           return $lines[0][0];
       }
       catch(PDOException $e) {
           return $e;
       }
   }

   function creerComtpe($User,$Mdp)
   {
       try{
           $request = "insert into compte(User,Mdp) values($User,'$Mdp')";
           $result = $this->connexion->query($request);
           return $result;
       }
       catch(PDOException $e) {
           return $e;
       }
   }
}