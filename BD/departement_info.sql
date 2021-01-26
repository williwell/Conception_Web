-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 26, 2021 at 07:55 PM
-- Server version: 8.0.21
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `departement_info`
--

-- --------------------------------------------------------

--
-- Table structure for table `enseignant`
--

DROP TABLE IF EXISTS `enseignant`;
CREATE TABLE IF NOT EXISTS `enseignant` (
  `Matricule` varchar(7) NOT NULL,
  `Prénom` varchar(50) DEFAULT NULL,
  `Nom` varchar(50) DEFAULT NULL,
  `Type_Employer` varchar(200) DEFAULT NULL,
  `Courriel` varchar(200) DEFAULT NULL,
  `Téléphone` varchar(14) DEFAULT NULL,
  `Poste` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`Matricule`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `enseignant`
--

INSERT INTO `enseignant` (`Matricule`, `Prénom`, `Nom`, `Type_Employer`, `Courriel`, `Téléphone`, `Poste`) VALUES
('1734055', 'Alexandra', 'Sirois', 'Enseignante', 'alexandra.sirois@edu.cegeptr.qc.ca', '(819) 269-3875', '1921'),
('1827446', 'Mathieu', 'Harvey', 'Technicien', 'mathieu.harvey.01@edu.cegeptr.qc.ca', '(819) 224-1875', '2451'),
('1304095', 'William-Arthur', 'Cinq-Mars', 'Enseignant', 'william.arthur.cinq.mars.01@edu.cegeptr.qc.ca', '(819) 244-0221', '4204');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
