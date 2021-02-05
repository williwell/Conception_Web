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
           $request = "SELECT * FROM actualite Order by noActualite Desc";
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();

           return $lines;
       }
       catch(PDOException $e) {
           return $lines;
       }
   }

    function getLiens():array
    {
        $lines = array();
       try {
           $request = "SELECT * FROM Liens";
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();

           return $lines;
       }
       catch(PDOException $e) {
           return $lines;
       }
    }
}