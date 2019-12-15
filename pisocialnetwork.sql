-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  Dim 15 déc. 2019 à 01:27
-- Version du serveur :  5.7.19
-- Version de PHP :  5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `pisocialnetwork`
--

-- --------------------------------------------------------

--
-- Structure de la table `activite`
--

DROP TABLE IF EXISTS `activite`;
CREATE TABLE IF NOT EXISTS `activite` (
  `idCommentaire` int(11) NOT NULL,
  `idPost` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `dateActivite` date DEFAULT NULL,
  PRIMARY KEY (`idCommentaire`,`idPost`,`idUser`),
  KEY `FKb7n9w96701byy8qsjrislumqt` (`idPost`),
  KEY `FK241qiiiycodew2x1ymquhmyot` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `activite`
--

INSERT INTO `activite` (`idCommentaire`, `idPost`, `idUser`, `dateActivite`) VALUES
(1, 1, 1, '2019-11-03'),
(2, 1, 2, '2019-11-19');

-- --------------------------------------------------------

--
-- Structure de la table `claim`
--

DROP TABLE IF EXISTS `claim`;
CREATE TABLE IF NOT EXISTS `claim` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dateReclamation` date DEFAULT NULL,
  `desciption` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `typeclaim` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `verifier` bit(1) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKm19ets51914v6d9hceuruhage` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `claim`
--

INSERT INTO `claim` (`id`, `dateReclamation`, `desciption`, `typeclaim`, `verifier`, `user_id`) VALUES
(1, '2019-10-30', 'tessst', 'NORMAL', b'1', 1),
(2, '2019-10-31', 'tessst', 'NORMAL', b'1', 1),
(3, '2019-10-31', 'tessst', 'NORMAL', b'1', 1),
(4, '2019-10-31', 'tessst', 'NORMAL', b'1', 2),
(10, '2019-11-03', 'test', 'NORMAL', b'1', 3),
(15, '2019-11-06', 'test', 'NORMAL', b'0', 3),
(16, '2019-12-09', 'test reclamation', 'NORMAL', b'0', 1),
(17, '2019-12-09', '', 'NORMAL', b'0', 1),
(18, '2019-12-09', 'kkkk', 'NORMAL', b'0', 1),
(19, '2019-12-09', '', 'NORMAL', b'0', 1),
(20, '2019-12-09', '', 'NORMAL', b'0', 1),
(21, '2019-12-09', 'sss', 'NORMAL', b'0', 2),
(22, '2019-12-09', '', 'NORMAL', b'0', 2),
(30, '2019-12-10', 'ss', 'NORMAL', b'0', 1),
(31, '2019-12-10', 'mm', 'NORMAL', b'0', 8),
(32, '2019-12-10', 'aa', 'NORMAL', b'0', 8),
(33, '2019-12-10', '22', 'NORMAL', b'0', 2),
(34, '2019-12-10', 'mm', 'NORMAL', b'0', 2),
(35, '2019-12-10', 'll', 'NORMAL', b'0', 3),
(36, '2019-12-10', 'n', 'NORMAL', b'0', 2),
(37, '2019-12-10', 'kk', 'NORMAL', b'0', 3),
(38, '2019-12-10', 'aa', 'NORMAL', b'0', 3),
(39, '2019-12-10', ',,', 'NORMAL', b'0', 2),
(40, '2019-12-10', 'z', 'NORMAL', b'0', 3),
(41, '2019-12-10', 'm', 'NORMAL', b'0', 3),
(42, '2019-12-10', 'kk', 'NORMAL', b'0', 3),
(43, '2019-12-10', 'aaa', 'NORMAL', b'0', 2),
(47, '2019-12-10', 'test', 'SIGNALISATION', b'0', 2),
(48, '2019-12-11', 'kk', 'NORMAL', b'0', 2),
(50, '2019-12-11', 'hhh', 'NORMAL', b'0', 1);

-- --------------------------------------------------------

--
-- Structure de la table `commentaire`
--

DROP TABLE IF EXISTS `commentaire`;
CREATE TABLE IF NOT EXISTS `commentaire` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dateCommentaire` date DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `commentaire`
--

INSERT INTO `commentaire` (`id`, `dateCommentaire`, `description`) VALUES
(1, '2019-11-05', 'comment'),
(2, '2019-11-13', 'comment');

-- --------------------------------------------------------

--
-- Structure de la table `competence`
--

DROP TABLE IF EXISTS `competence`;
CREATE TABLE IF NOT EXISTS `competence` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `competences` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `candidate_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKdtfaf0pgunry2bhqlrgy1vgke` (`candidate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `competence`
--

INSERT INTO `competence` (`id`, `competences`, `candidate_id`) VALUES
(1, 'java;php;javascript;', 1),
(2, 'nodejs;java;php;', 3),
(3, 'angular;', 2),
(4, 'java;javascript', 5),
(5, 'reactjs', 6),
(6, 'mongodb;symfony', 7);

-- --------------------------------------------------------

--
-- Structure de la table `interview`
--

DROP TABLE IF EXISTS `interview`;
CREATE TABLE IF NOT EXISTS `interview` (
  `idCandidate` int(11) NOT NULL,
  `idCompanyManager` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`idCandidate`,`idCompanyManager`),
  KEY `FKl1dnkbovyshhk0smtcvxoc9a7` (`idCompanyManager`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `interview`
--

INSERT INTO `interview` (`idCandidate`, `idCompanyManager`, `date`) VALUES
(1, 3, '2019-03-06'),
(2, 9, '2019-05-08'),
(4, 3, '2019-11-06'),
(4, 9, '2019-01-09'),
(5, 3, '2019-02-20'),
(5, 9, '2019-01-10'),
(6, 3, '2019-02-11'),
(6, 9, '2019-04-17'),
(7, 3, '2019-11-13'),
(7, 9, '2019-02-02'),
(8, 9, '2019-11-27');

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

DROP TABLE IF EXISTS `message`;
CREATE TABLE IF NOT EXISTS `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKfkj0bfandt6mbdmw5dim9q7nl` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `notification`
--

DROP TABLE IF EXISTS `notification`;
CREATE TABLE IF NOT EXISTS `notification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK47qcspfhqn5gd49dylmnu31fb` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `notification`
--

INSERT INTO `notification` (`id`, `date`, `description`, `user_id`) VALUES
(1, '2019-10-31', 'test notification', 1),
(2, '2019-10-31', 'test notification', 1),
(3, '2019-10-31', 'test notification', 1),
(4, '2019-10-31', 'test notification', 2),
(5, '2019-10-31', 'test notification', 2),
(6, '2019-10-31', 'à cause de signalisation de votre compte plus que 2 fois ,votre compte sera banné immediatement !', 2),
(7, '2019-10-31', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 2),
(8, '2019-10-31', 'à cause de signalisation de votre compte plus que 2 fois ,votre compte sera banné immediatement !', 2),
(9, '2019-11-01', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 2),
(10, '2019-11-03', 'test', 3),
(11, '2019-11-03', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 3),
(12, '2019-11-03', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 3),
(13, '2019-11-03', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 3),
(14, '2019-11-03', 'à cause de signalisation de votre compte plus que 2 fois ,votre compte sera banné immediatement !', 3),
(15, '2019-11-06', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 4),
(16, '2019-11-06', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 4),
(17, '2019-11-06', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 4),
(18, '2019-11-06', 'à cause de signalisation de votre compte plus que 2 fois ,votre compte sera banné immediatement !', 4),
(19, '2019-11-06', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 4),
(20, '2019-11-06', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 2),
(21, '2019-11-06', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 2),
(22, '2019-11-06', 'à cause de signalisation de votre compte plus que 2 fois ,votre compte sera banné immediatement !', 2),
(23, '2019-12-05', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 1),
(24, '2019-12-05', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 1),
(25, '2019-12-05', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 7),
(26, '2019-12-06', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 2),
(27, '2019-12-06', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 4),
(28, '2019-12-06', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 4),
(29, '2019-12-06', 'à cause de signalisation de votre compte plus que 2 fois ,votre compte sera banné immediatement !', 4),
(30, '2019-12-09', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 1),
(31, '2019-12-09', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 1),
(32, '2019-12-09', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 1),
(33, '2019-12-09', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 1),
(34, '2019-12-09', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 1),
(35, '2019-12-09', 'à cause de signalisation de votre compte plus que 2 fois ,votre compte sera banné immediatement !', 1),
(40, '2019-12-10', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 1),
(41, '2019-12-10', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 2),
(42, '2019-12-11', 'à cause de signalisation de votre compte plus que 2 fois ,votre compte sera banné immediatement !', 1),
(43, '2019-12-11', 'attention , il y a quelqun qui vous a signalé pour un movais comportement d\'utilisation, la prochaine fois votre compte sera banné', 1),
(44, '2019-12-11', 'à cause de signalisation de votre compte plus que 2 fois ,votre compte sera banné immediatement !', 1);

-- --------------------------------------------------------

--
-- Structure de la table `offre`
--

DROP TABLE IF EXISTS `offre`;
CREATE TABLE IF NOT EXISTS `offre` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contenu` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `date` date DEFAULT NULL,
  `niveauExp` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `offre`
--

INSERT INTO `offre` (`id`, `contenu`, `date`, `niveauExp`) VALUES
(1, 'offre num1', '2019-10-24', NULL),
(2, 'offre num2', '2019-10-11', NULL),
(3, 'offre num3', '2019-10-03', NULL),
(5, 'offre num5', '2019-11-12', NULL),
(9, 'offre de stage', '2019-01-04', NULL),
(10, 'stage pres embauche ', '2019-02-10', NULL),
(11, 'poste ingenieur', '2019-05-11', NULL),
(12, 'poste technicien ', '2019-06-11', NULL),
(13, 'offre 1', '2019-02-11', NULL),
(14, 'offre 2', '2019-12-02', NULL),
(15, 'offre de travail1', '2019-12-12', NULL),
(16, 'offre de travail1', '2019-12-19', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `payement`
--

DROP TABLE IF EXISTS `payement`;
CREATE TABLE IF NOT EXISTS `payement` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `datePayement` date DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `montant` double NOT NULL,
  `numeroCarte` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKs6csstxyxqt5bhd435ed05uv3` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `payement`
--

INSERT INTO `payement` (`id`, `datePayement`, `description`, `montant`, `numeroCarte`, `user_id`) VALUES
(8, '2019-01-25', 'premiere migration gratuite vers compte premium expirera le 30-01-2020', 180, '1234567891111111', 1),
(9, '2019-10-20', 'payement pour la publication d\'un offre d\'emploi pour 8dt/mois ,il vous reste dans votre carte : 192.0dt', 192, '1234567891111111', 1),
(10, '2019-10-30', 'payement pour la publication d\'un offre d\'emploi pour 8dt/mois ,il vous reste dans votre carte : 192.0dt', 192, '1234567891111111', 1),
(12, '2019-10-01', 'payement pour la publication d\'un offre d\'emploi pour 8dt/mois ,il vous reste dans votre carte : 192.0dt', 192, '1234567891111111', 1),
(13, '2019-10-03', 'payement pour la publication d\'un offre d\'emploi pour 8dt/mois ,il vous reste dans votre carte : 192.0dt', 192, '1234567891111111', 1),
(14, '2019-12-02', 'migration vers compte premium pour 20.0dt/mois ,elle expirera le 01-12-2019 ,il vous reste dans votre carte : 180.0dt', 180, '1234567891111111', 1),
(15, '2019-12-05', 'premiere migration gratuite vers compte premium expirera le 01-12-2019', 180, '1234567891111111', 2),
(16, '2019-06-12', 'payement pour la publication d\'un offre d\'emploi pour 8dt/mois ,il vous reste dans votre carte : 192.0dt', 192, '1234567891111111', 2),
(17, '2019-10-31', 'payement pour la publication d\'un offre d\'emploi pour 8dt/mois ,il vous reste dans votre carte : 192.0dt', 192, '1234567891111111', 2),
(18, '2019-10-31', 'payement pour la publication d\'un offre d\'emploi pour 8dt/mois ,il vous reste dans votre carte : 192.0dt', 192, '1234567891111111', 2),
(21, '2019-11-03', 'payement pour la publication d\'un offre d\'emploi pour 4dt/mois avec la réduction 50% de \'mounth starting!\'  ,il vous reste dans votre carte : 196.0dt', 196, '4242424242424242', 3),
(22, '2019-07-03', 'premiere migration gratuite vers compte premium expirera le 03-12-2019', 0, '4242424242424242', 4),
(25, '2019-11-03', 'payement pour la publication d\'un offre d\'emploi pour 4dt/mois avec la réduction 50% de \'mounth starting!\'  ,il vous reste dans votre carte : 196.0dt', 196, '4242424242424242', 3),
(26, '2019-11-03', 'payement pour la publication d\'un offre d\'emploi pour 4dt/mois avec la réduction 50% de \'mounth starting!\'  ,il vous reste dans votre carte : 196.0dt', 196, '4242424242424242', 3),
(27, '2019-11-03', 'payement pour la publication d\'un offre d\'emploi pour 4dt/mois avec la réduction 50% de \'mounth starting!\'  ,il vous reste dans votre carte : 196.0dt', 196, '4242424242424242', 3),
(28, '2019-11-03', 'payement pour la publication d\'un offre d\'emploi pour 4dt/mois avec la réduction 50% de \'mounth starting!\'  ,il vous reste dans votre carte : 196.0dt', 196, '4242424242424242', 3),
(30, '2019-11-03', 'payement pour la publication d\'un offre d\'emploi pour 4dt/mois avec la réduction 50% de \'mounth starting!\'  ,il vous reste dans votre carte : 196.0dt', 196, '4242424242424242', 3),
(31, '2019-11-03', 'payement pour la publication d\'un offre d\'emploi pour 4dt/mois avec la réduction 50% de \'mounth starting!\'  ,il vous reste dans votre carte : 196.0dt', 196, '4242424242424242', 3),
(46, '2019-07-04', 'premiere migration gratuite vers compte premium expirera le 04-12-2019', 200, '4242424242424242', 7),
(48, '2019-12-01', 'migration vers compte premium pour 50.0$/mois ,elle expirera le 04-12-2019', 200, '4242424242424242', 7),
(51, '2019-11-04', 'payement pour la publication d\'un offre d\'emploi pour 3$/mois', -100, '4242424242424242', 3),
(52, '2019-11-04', 'payement pour la publication d\'un offre d\'emploi pour 3$/mois', -100, '4242424242424242', 3),
(53, '2019-12-02', 'premiere migration gratuite vers compte premium expirera le 04-12-2019', 200, '4242424242424242', 6),
(54, '2019-11-05', 'payement pour la publication d\'un offre d\'emploi pour 3$/mois', -100, '4242424242424242', 3),
(55, '2019-11-05', 'payement pour la publication d\'un offre d\'emploi pour 3$/mois', -100, '4242424242424242', 3),
(56, '2019-11-05', 'payement pour la publication d\'un offre d\'emploi pour 5$/mois', -300, '4242424242424242', 3),
(57, '2019-11-05', 'payement pour la publication d\'un offre d\'emploi pour 5$/mois', -300, '4242424242424242', 3),
(59, '2019-11-06', 'payement pour la publication d\'un offre d\'emploi pour 5$/mois', -300, '4242424242424242', 3),
(60, '2019-11-06', 'payement pour la publication d\'un offre d\'emploi pour 5$/mois', -300, '4242424242424242', 3),
(63, '2019-11-06', 'payement pour la publication d\'un offre d\'emploi pour 5$/mois', -300, '4242424242424242', 3),
(111, '2019-12-11', 'payement pour la publication d\'un offre d\'emploi pour 5$/mois', -300, '4242424242424242', 3),
(112, '2019-12-11', 'payement pour la publication d\'un offre d\'emploi pour 5$/mois', -300, '4242424242424242', 3);

-- --------------------------------------------------------

--
-- Structure de la table `post`
--

DROP TABLE IF EXISTS `post`;
CREATE TABLE IF NOT EXISTS `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `datePost` date DEFAULT NULL,
  `desciption` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `isActive` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `post`
--

INSERT INTO `post` (`id`, `datePost`, `desciption`, `description`, `isActive`) VALUES
(1, '2019-11-06', 'post', NULL, b'0'),
(2, '2019-11-12', 'post 2', NULL, b'0'),
(3, NULL, NULL, NULL, b'0');

-- --------------------------------------------------------

--
-- Structure de la table `rating`
--

DROP TABLE IF EXISTS `rating`;
CREATE TABLE IF NOT EXISTS `rating` (
  `idPost` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `nombreRate` int(11) NOT NULL,
  PRIMARY KEY (`idPost`,`idUser`),
  KEY `FK8m3n9pshh69b9lqlqnsxdtv8x` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `reaction`
--

DROP TABLE IF EXISTS `reaction`;
CREATE TABLE IF NOT EXISTS `reaction` (
  `idPost` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `etat` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`idPost`,`idUser`),
  KEY `FKlawdrv6l9lnosx6r7dylp4k8o` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `DTYPE` varchar(31) COLLATE utf8_bin NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `adresse` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `gouvernorats` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `isActive` bit(1) DEFAULT NULL,
  `mail` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `nom` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `numeroCarte` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `prenom` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `typeCompte` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `afftected` int(11) DEFAULT NULL,
  `bio` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `certification` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `parcours` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `role` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `introduction` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `nbEmployee` int(11) DEFAULT NULL,
  `candidate_fk` int(11) DEFAULT NULL,
  `companyManager_id` int(11) DEFAULT NULL,
  `CustomerId` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `nbAbonnees` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKjk1mj8g5cs93mhii5fq74rag9` (`candidate_fk`),
  KEY `FK7iaw2e3bju8mecmtgyft0yp7f` (`companyManager_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`DTYPE`, `id`, `adresse`, `gouvernorats`, `isActive`, `mail`, `nom`, `numeroCarte`, `prenom`, `typeCompte`, `afftected`, `bio`, `certification`, `parcours`, `role`, `introduction`, `nbEmployee`, `candidate_fk`, `companyManager_id`, `CustomerId`, `password`, `nbAbonnees`) VALUES
('Candidate', 1, NULL, 'Tunis;Kairouan', b'0', 'a@a.com', 'ahmed', '4242424242424242', NULL, 'PREMIUM', 1, NULL, NULL, NULL, 'NORMAL', NULL, 9, NULL, NULL, NULL, '0000', 9),
('User', 2, NULL, 'Monastir', b'1', 'b@b.com', 'ala', '4242424242424242', NULL, 'PREMIUM', 0, NULL, NULL, NULL, 'RH_MANAGER', NULL, 8, NULL, NULL, NULL, '0000', 8),
('CompanyManager', 3, NULL, 'Kairouan', b'1', 'c@c.com', 'omar', '4242424242424242', NULL, 'FREE', 1, NULL, NULL, NULL, 'PROJECT_MANAGER', NULL, 10, NULL, NULL, 'cus_G7nyhg05nDx9dg', '0000', 10),
('Candidate', 4, NULL, 'Monastir', b'1', 'aa@a.com', 'amir', '4242424242424242', NULL, 'FREE', 1, NULL, NULL, NULL, 'NORMAL', NULL, 15, NULL, NULL, 'cus_G6z772O8n6RhKU', '0000', 15),
('Candidate', 5, NULL, 'Monastir', b'1', 'aaa@a.com', 'sami', '4242424242424242', NULL, 'FREE', 1, NULL, NULL, NULL, 'NORMAL', NULL, 21, NULL, NULL, 'cus_GJBg4yUwbqH4RU', '0000', 21),
('Candidate', 6, NULL, 'Monastir', b'1', 'ahmed.benmbarek@esprit.tn', 'seif', '4242424242424242', NULL, 'PREMIUM', 1, NULL, NULL, NULL, 'NORMAL', NULL, 7, NULL, NULL, 'cus_G7SP24eQaJ1p6C', '0000', 7),
('Candidate', 7, NULL, 'Monastir', b'1', 'w@w.com', 'achref', '4242424242424242', NULL, 'PREMIUM', 1, NULL, NULL, NULL, 'NORMAL', NULL, 10, NULL, NULL, 'cus_G77vKkp5FGUbA0', '0000', 10),
('Candidate', 8, NULL, 'Tunis', b'1', 'user@user.com', 'ali', '4242424242424242', NULL, 'FREE', 1, NULL, NULL, NULL, 'NORMAL', NULL, 10, NULL, NULL, 'cus_G820wGUF8F8VoS', '0000', 10),
('CompanyManager', 9, NULL, 'tunis', b'1', 'company@c.com', 'comany', '4242424242424242', NULL, 'FREE', 1, NULL, NULL, NULL, 'PROJECT_MANAGER', NULL, 17, NULL, NULL, NULL, '0000', 11);

-- --------------------------------------------------------

--
-- Structure de la table `user_offre`
--

DROP TABLE IF EXISTS `user_offre`;
CREATE TABLE IF NOT EXISTS `user_offre` (
  `user_id` int(11) NOT NULL,
  `offre_id` int(11) NOT NULL,
  KEY `FKi1nf4uxlhjihivuvflwt9hnti` (`offre_id`),
  KEY `FKm03y7n06nxltn1qlbsd87g4no` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `user_offre`
--

INSERT INTO `user_offre` (`user_id`, `offre_id`) VALUES
(1, 1),
(2, 1),
(1, 2),
(1, 3),
(2, 1),
(3, 3),
(3, 2),
(3, 1),
(1, 5),
(5, 1),
(3, 10),
(7, 10),
(8, 9),
(7, 11),
(5, 12),
(4, 13),
(5, 13),
(3, 3),
(3, 14),
(3, 15),
(3, 16);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `activite`
--
ALTER TABLE `activite`
  ADD CONSTRAINT `FK241qiiiycodew2x1ymquhmyot` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKb7n9w96701byy8qsjrislumqt` FOREIGN KEY (`idPost`) REFERENCES `post` (`id`),
  ADD CONSTRAINT `FKrc6xihvhd3gyk8cechcj332ai` FOREIGN KEY (`idCommentaire`) REFERENCES `commentaire` (`id`);

--
-- Contraintes pour la table `claim`
--
ALTER TABLE `claim`
  ADD CONSTRAINT `FKm19ets51914v6d9hceuruhage` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `competence`
--
ALTER TABLE `competence`
  ADD CONSTRAINT `FKdtfaf0pgunry2bhqlrgy1vgke` FOREIGN KEY (`candidate_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `interview`
--
ALTER TABLE `interview`
  ADD CONSTRAINT `FK84nrvrruo4wi42w4ygtl1j3pa` FOREIGN KEY (`idCandidate`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKl1dnkbovyshhk0smtcvxoc9a7` FOREIGN KEY (`idCompanyManager`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `FKfkj0bfandt6mbdmw5dim9q7nl` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `FK47qcspfhqn5gd49dylmnu31fb` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `payement`
--
ALTER TABLE `payement`
  ADD CONSTRAINT `FKs6csstxyxqt5bhd435ed05uv3` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `rating`
--
ALTER TABLE `rating`
  ADD CONSTRAINT `FK88saqi1evl8fbwhrpfnj496p0` FOREIGN KEY (`idPost`) REFERENCES `post` (`id`),
  ADD CONSTRAINT `FK8m3n9pshh69b9lqlqnsxdtv8x` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `reaction`
--
ALTER TABLE `reaction`
  ADD CONSTRAINT `FKkya2bh8gwfppha6js4xteh17a` FOREIGN KEY (`idPost`) REFERENCES `post` (`id`),
  ADD CONSTRAINT `FKlawdrv6l9lnosx6r7dylp4k8o` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK7iaw2e3bju8mecmtgyft0yp7f` FOREIGN KEY (`companyManager_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKjk1mj8g5cs93mhii5fq74rag9` FOREIGN KEY (`candidate_fk`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `user_offre`
--
ALTER TABLE `user_offre`
  ADD CONSTRAINT `FKi1nf4uxlhjihivuvflwt9hnti` FOREIGN KEY (`offre_id`) REFERENCES `offre` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKm03y7n06nxltn1qlbsd87g4no` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
