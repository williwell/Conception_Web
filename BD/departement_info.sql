-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le : ven. 29 jan. 2021 à 19:12
-- Version du serveur :  8.0.21
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `departement_info`
--

-- --------------------------------------------------------

--
-- Structure de la table `actualite`
--

DROP TABLE IF EXISTS `actualite`;
CREATE TABLE IF NOT EXISTS `actualite` (
  `noActualite` int NOT NULL AUTO_INCREMENT,
  `titreActualite` text NOT NULL,
  `link` varchar(75) NOT NULL,
  `photoActu` varchar(75) NOT NULL,
  PRIMARY KEY (`noActualite`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `enseignant`
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
-- Déchargement des données de la table `enseignant`
--

INSERT INTO `enseignant` (`Matricule`, `Prénom`, `Nom`, `Type_Employer`, `Courriel`, `Téléphone`, `Poste`) VALUES
('1734055', 'Alexandra', 'Sirois', 'Enseignante', 'alexandra.sirois@edu.cegeptr.qc.ca', '(819) 269-3875', '1921'),
('1827446', 'Mathieu', 'Harvey', 'Technicien', 'mathieu.harvey.01@edu.cegeptr.qc.ca', '(819) 224-1875', '2451'),
('1304095', 'William-Arthur', 'Cinq-Mars', 'Enseignant', 'william.arthur.cinq.mars.01@edu.cegeptr.qc.ca', '(819) 244-0221', '4204');

-- --------------------------------------------------------

--
-- Structure de la table `events`
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `noEvent` int NOT NULL AUTO_INCREMENT,
  `name` varchar(75) NOT NULL,
  `dateE` date NOT NULL,
  `link` varchar(150) NOT NULL,
  PRIMARY KEY (`noEvent`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `events`
--

INSERT INTO `events` (`noEvent`, `name`, `dateE`, `link`) VALUES
(1, 'Événement 1 (aller sur le site cegep)', '2021-03-17', 'https://www.cegeptr.qc.ca/'),
(2, 'Événement 2 (aller sur omnivox)', '2021-02-10', 'https://cegeptr.omnivox.ca/Login/Account/Login?ReturnUrl=%2fintr'),
(3, 'Événement 3 (aller sur google)', '2021-02-24', 'https://www.google.ca'),
(4, 'Événement 4 (aller sur youtube)', '2021-05-06', 'https://www.youtube.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
