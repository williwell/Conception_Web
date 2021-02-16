-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le : mar. 16 fév. 2021 à 17:43
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
  `TexteActu` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `photoActu` varchar(75) NOT NULL,
  PRIMARY KEY (`noActualite`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `actualite`
--

INSERT INTO `actualite` (`noActualite`, `titreActualite`, `TexteActu`, `photoActu`) VALUES
(1, 'Titre 1', 'Test d\'actualité', '../RESSOURCES/Photo_Actu/photo test.jpg'),
(2, 'Titre 2', 'Test d\'actualité', '../RESSOURCES/Photo_Actu/photo test.jpg'),
(3, 'Titre 3', 'Test d\'actualité', '../RESSOURCES/Photo_Actu/photo test.jpg'),
(4, 'titre pour test avec long texte', '            loin de moi l\'idée de graver dans le marbre de tailler dans une écorce d\'arbre loin de moi l\'idée de suggérer que je m\'en moque que je n\'en ai rien à faire que guère je ne m\'en soucie loin de moi ces folies mais je m\'échine depuis octobre et pourquoi donc depuis début octobre même et qui m\'aime me suive depuis octobre depuis ce même dernier octobre le trois du mois je crois depuis ce temps-là depuis trois mois depuis trois mois et une semaine je m\'échine ailleurs et le très long texte n\'a pas avancé d\'un poil pas beaucoup sans doute est-ce mon côté velléitaire qui ne cesse de me jouer des tours et les méandres du très long texte se sont figés comme une gelée le long des parois d\'un bocal de verre et je vitupère contre mes essais éphémères mon tempérament affreusement velléitaire et ce teint d\'albâtre qui n\'est pas le mien comme je voudrais qu\'il fût d\'albâtre ou d\'ébène ou autrement même sans métaphore mais au moins qu\'il ait quelque tenue que mon visage sans retenue puisse soudain passer pour un tissu une pierre un songe soit en quelque sorte un tableau fasse tableau mais ce n\'est pas le cas même ce mot albâtre jeté au visage jeté tout à trac sur la page en haut de page ce mot me défigure ne me figure pas ne me représente pas ne figure rien de ce que je suis de ce que je pense être et je suis encore et toujours circonspect dans le doute et ce mot n\'apporte rien aucune réponse et donc toujours je me jette à la figure ces accusations comme des bouteilles non pas à la mer mais bien dans la gueule oui je me donne des coups de bouteille tessons épars sur le parquet et mes joues ensanglantées enfin que ce soit ou non métaphore que le mot d\'albâtre me figure ou non je prends ces coups ces reproches en plein visage et je m\'accuse d\'être velléitaire aussi bien sûr pour trop entreprendre je lance cent feux il est normal qu\'un certain nombre des foyers meure et même ne démarre qu\'à peine avant de s\'achever dans un bruit de feuilles mouillées de bois mort de bois trop vert encore pour prendre tout cela encore métaphore et toujours métaphore peut-être est-ce le mot albâtre qui appelle autant de métaphores ou bien les conditions d\'écriture du très long texte que par facétie ou encore autodérision je pourrais être tenté de rebaptiser très long texte interrompu et l\'adjectif interrompu ici au milieu de la ligne interrompt mes songes interrompt le torrent de sornettes lance d\'autres tirades propose peut-être d\'autres charades mais pour mieux me ramener vers le rivage bourbeux où je ne cesse de me lancer ces reproches à la figure velléitaire velléitaire et me voici encore à ne pas même essayer de me justifier moi-même de tout cela feux mal éteints et feux qui n\'ont jamais pris aussi me trouvé-je vingt vaines justifications improbables même si certaines sont justes par ailleurs comme dans le cas du projet de traduire régulièrement et pensais-je au début au moins une fois par semaine un poème et qui s\'est enlisé après à peine trois ou quatre tracasseries mais cela reprendra parfois aussi depuis début octobre le trois je crois suspendu à ce mot d\'albâtre depuis le trois octobre le trois je crois je me disais que pour être interrompu ou inachevé le très long texte recelait de vraies possibilités et qu\'il suffisait suffirait eût suffi de s\'y remettre et la machine reprendrait du galon non là cette image-là ne va pas je mélange les formules croise les figures de style et donc je pensais qu\'il me faudrait toutes proportions gardées envisager ces carnets comme Paul Valéry travaillant régulièrement et sans espoir d\'en finir jamais chaque matin à ses Cahiers désormais regroupés en deux tomes en Pléiade et que j\'ai dévorés consultés admirés lus compulsés longuement naguère mais il faudrait dire jadis ou balancer entre les deux lus disons entre 1993 et 1997 et donc toutes proportions gardées je me verrais bien ainsi à reprendre tel chantier interrompu trois mois et le faisant avancer un petit peu mais enfin ce n\'est pas possible il ne va pas se comparer à Paul Valéry l\'autre oiseux oisif ex-oisien de surcroît ancien oisien into the bargain non il ne va pas se comparer à Paul Valéry tout de même alors que seulement et il nous l\'a dit même avec métaphores tout le tintouin oui oui noir sur blanc dit ce n\'est rien d\'autre qu\'un affreux\r\n\r\n', '');

-- --------------------------------------------------------

--
-- Structure de la table `compte`
--

DROP TABLE IF EXISTS `compte`;
CREATE TABLE IF NOT EXISTS `compte` (
  `User` int NOT NULL,
  `Mdp` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`User`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `compte`
--

INSERT INTO `compte` (`User`, `Mdp`) VALUES
(1304095, 'test'),
(111, '$2y$10$e/QkaUx/y4z0LAuReqi//ucyQQcM71h8yYyjppvMq2/fzQXqAvzu.');

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
