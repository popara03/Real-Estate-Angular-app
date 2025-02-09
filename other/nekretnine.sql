-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 24, 2024 at 11:58 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nekretnine`
--

-- --------------------------------------------------------

--
-- Table structure for table `bathroom`
--

CREATE TABLE `bathroom` (
  `id` int(11) NOT NULL,
  `area` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bathroom`
--

INSERT INTO `bathroom` (`id`, `area`, `created_at`) VALUES
(8, 75, '2024-07-08 20:03:16'),
(9, 50, '2024-07-08 20:03:16'),
(10, 125, '2024-07-11 18:46:04'),
(11, 200, '2024-07-11 18:46:04'),
(12, 150, '2024-07-11 18:55:19'),
(13, 250, '2024-07-11 19:00:25'),
(14, 200, '2024-07-11 19:00:25'),
(15, 200, '2024-07-11 19:03:59'),
(16, 120, '2024-07-11 19:03:59'),
(17, 200, '2024-07-11 19:07:08'),
(18, 150, '2024-07-11 19:07:08'),
(19, 150, '2024-07-11 19:10:34'),
(20, 200, '2024-07-11 19:10:34'),
(21, 444, '2024-07-14 17:56:42'),
(22, 4, '2024-07-14 18:03:27'),
(23, 22, '2024-08-21 14:52:21'),
(25, 45, '2024-08-21 20:34:51'),
(32, 60, '2024-08-21 22:16:52'),
(33, 80, '2024-08-21 23:36:03'),
(34, 50, '2024-08-21 23:36:03'),
(39, 85, '2024-08-22 01:28:32'),
(41, 56, '2024-08-22 18:03:16'),
(42, 34, '2024-08-24 23:44:41');

-- --------------------------------------------------------

--
-- Table structure for table `bathroom_element`
--

CREATE TABLE `bathroom_element` (
  `id` int(11) NOT NULL,
  `bathroom_id` int(11) NOT NULL,
  `element_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bathroom_element`
--

INSERT INTO `bathroom_element` (`id`, `bathroom_id`, `element_id`, `created_at`) VALUES
(13, 8, 28, '2024-07-08 18:03:16'),
(14, 8, 29, '2024-07-08 18:03:16'),
(15, 8, 30, '2024-07-08 18:03:16'),
(16, 8, 31, '2024-07-08 18:03:16'),
(17, 8, 33, '2024-07-08 18:03:16'),
(18, 8, 21, '2024-07-08 18:03:16'),
(19, 8, 11, '2024-07-08 18:03:16'),
(20, 9, 33, '2024-07-08 18:03:16'),
(21, 9, 21, '2024-07-08 18:03:16'),
(22, 9, 29, '2024-07-08 18:03:16'),
(23, 10, 29, '2024-07-11 16:46:04'),
(24, 10, 28, '2024-07-11 16:46:04'),
(25, 10, 11, '2024-07-11 16:46:04'),
(26, 10, 33, '2024-07-11 16:46:04'),
(27, 11, 28, '2024-07-11 16:46:04'),
(28, 11, 29, '2024-07-11 16:46:04'),
(29, 11, 11, '2024-07-11 16:46:04'),
(30, 11, 30, '2024-07-11 16:46:04'),
(31, 11, 31, '2024-07-11 16:46:04'),
(32, 11, 32, '2024-07-11 16:46:04'),
(33, 11, 21, '2024-07-11 16:46:04'),
(34, 12, 28, '2024-07-11 16:55:19'),
(35, 12, 29, '2024-07-11 16:55:19'),
(36, 12, 31, '2024-07-11 16:55:19'),
(37, 12, 32, '2024-07-11 16:55:19'),
(38, 12, 21, '2024-07-11 16:55:19'),
(39, 13, 28, '2024-07-11 17:00:25'),
(40, 13, 29, '2024-07-11 17:00:25'),
(41, 13, 30, '2024-07-11 17:00:25'),
(42, 13, 31, '2024-07-11 17:00:25'),
(43, 13, 32, '2024-07-11 17:00:25'),
(44, 14, 29, '2024-07-11 17:00:25'),
(45, 14, 31, '2024-07-11 17:00:25'),
(46, 14, 33, '2024-07-11 17:00:25'),
(47, 14, 21, '2024-07-11 17:00:25'),
(48, 15, 28, '2024-07-11 17:03:59'),
(49, 15, 29, '2024-07-11 17:03:59'),
(50, 15, 31, '2024-07-11 17:03:59'),
(51, 15, 32, '2024-07-11 17:03:59'),
(52, 16, 29, '2024-07-11 17:03:59'),
(53, 16, 11, '2024-07-11 17:03:59'),
(54, 16, 32, '2024-07-11 17:03:59'),
(55, 17, 29, '2024-07-11 17:07:08'),
(56, 17, 28, '2024-07-11 17:07:08'),
(57, 17, 31, '2024-07-11 17:07:08'),
(58, 18, 33, '2024-07-11 17:07:08'),
(59, 18, 29, '2024-07-11 17:07:08'),
(60, 18, 11, '2024-07-11 17:07:08'),
(61, 18, 21, '2024-07-11 17:07:08'),
(62, 19, 29, '2024-07-11 17:10:34'),
(63, 19, 11, '2024-07-11 17:10:34'),
(64, 19, 33, '2024-07-11 17:10:34'),
(65, 19, 21, '2024-07-11 17:10:34'),
(66, 20, 21, '2024-07-11 17:10:34'),
(67, 20, 29, '2024-07-11 17:10:34'),
(68, 20, 30, '2024-07-11 17:10:34'),
(69, 20, 31, '2024-07-11 17:10:34'),
(70, 20, 32, '2024-07-11 17:10:34'),
(71, 21, 4, '2024-07-14 15:56:42'),
(72, 21, 11, '2024-07-14 15:56:42'),
(73, 21, 22, '2024-07-14 15:56:42'),
(74, 22, 6, '2024-07-14 16:03:27'),
(75, 23, 19, '2024-08-21 12:52:21'),
(77, 25, 28, '2024-08-21 18:34:51'),
(78, 25, 29, '2024-08-21 18:34:51'),
(79, 25, 32, '2024-08-21 18:34:51'),
(92, 32, 33, '2024-08-21 20:16:52'),
(93, 32, 21, '2024-08-21 20:16:52'),
(94, 32, 29, '2024-08-21 20:16:52'),
(95, 32, 30, '2024-08-21 20:16:52'),
(96, 32, 28, '2024-08-21 20:16:52'),
(97, 32, 31, '2024-08-21 20:16:52'),
(98, 33, 32, '2024-08-21 21:36:03'),
(99, 33, 28, '2024-08-21 21:36:03'),
(100, 33, 29, '2024-08-21 21:36:03'),
(101, 33, 30, '2024-08-21 21:36:03'),
(102, 33, 31, '2024-08-21 21:36:03'),
(103, 33, 21, '2024-08-21 21:36:03'),
(104, 34, 33, '2024-08-21 21:36:03'),
(105, 34, 29, '2024-08-21 21:36:03'),
(106, 34, 31, '2024-08-21 21:36:03'),
(111, 39, 29, '2024-08-21 23:28:32'),
(112, 39, 34, '2024-08-21 23:28:32'),
(114, 41, 30, '2024-08-22 16:03:16'),
(115, 41, 29, '2024-08-22 16:03:16'),
(116, 41, 28, '2024-08-22 16:03:16'),
(117, 42, 1, '2024-08-24 21:44:41');

-- --------------------------------------------------------

--
-- Table structure for table `bedroom`
--

CREATE TABLE `bedroom` (
  `id` int(11) NOT NULL,
  `area` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bedroom`
--

INSERT INTO `bedroom` (`id`, `area`, `created_at`) VALUES
(26, 200, '2024-07-08 20:03:16'),
(27, 125, '2024-07-08 20:03:16'),
(28, 500, '2024-07-11 18:46:04'),
(29, 350, '2024-07-11 18:46:04'),
(30, 200, '2024-07-11 18:46:04'),
(31, 300, '2024-07-11 18:55:19'),
(32, 250, '2024-07-11 18:55:19'),
(33, 300, '2024-07-11 19:00:25'),
(34, 250, '2024-07-11 19:00:25'),
(35, 250, '2024-07-11 19:00:25'),
(36, 250, '2024-07-11 19:03:59'),
(37, 200, '2024-07-11 19:03:59'),
(38, 300, '2024-07-11 19:07:08'),
(39, 220, '2024-07-11 19:10:34'),
(40, 175, '2024-07-11 19:10:34'),
(41, 400, '2024-07-14 17:56:42'),
(42, 2, '2024-07-14 18:03:27'),
(45, 50, '2024-08-21 20:34:51'),
(50, 45, '2024-08-21 22:22:08'),
(51, 100, '2024-08-21 23:31:18'),
(52, 150, '2024-08-21 23:36:03'),
(53, 100, '2024-08-21 23:36:03'),
(55, 50, '2024-08-22 01:25:28'),
(57, 22, '2024-08-22 18:02:18'),
(59, 77, '2024-08-24 23:47:14');

-- --------------------------------------------------------

--
-- Table structure for table `bedroom_element`
--

CREATE TABLE `bedroom_element` (
  `id` int(11) NOT NULL,
  `bedroom_id` int(11) NOT NULL,
  `element_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bedroom_element`
--

INSERT INTO `bedroom_element` (`id`, `bedroom_id`, `element_id`, `created_at`) VALUES
(121, 26, 1, '2024-07-08 20:03:16'),
(122, 26, 2, '2024-07-08 20:03:16'),
(123, 26, 7, '2024-07-08 20:03:16'),
(124, 26, 10, '2024-07-08 20:03:16'),
(125, 26, 11, '2024-07-08 20:03:16'),
(126, 27, 1, '2024-07-08 20:03:16'),
(127, 27, 7, '2024-07-08 20:03:16'),
(128, 27, 3, '2024-07-08 20:03:16'),
(129, 27, 10, '2024-07-08 20:03:16'),
(130, 27, 9, '2024-07-08 20:03:16'),
(131, 27, 14, '2024-07-08 20:03:16'),
(132, 27, 27, '2024-07-08 20:03:16'),
(133, 27, 24, '2024-07-08 20:03:16'),
(134, 27, 22, '2024-07-08 20:03:16'),
(135, 27, 11, '2024-07-08 20:03:16'),
(136, 28, 1, '2024-07-11 18:46:04'),
(137, 28, 2, '2024-07-11 18:46:04'),
(138, 28, 9, '2024-07-11 18:46:04'),
(139, 28, 22, '2024-07-11 18:46:04'),
(140, 28, 24, '2024-07-11 18:46:04'),
(141, 28, 14, '2024-07-11 18:46:04'),
(142, 28, 6, '2024-07-11 18:46:04'),
(143, 28, 7, '2024-07-11 18:46:04'),
(144, 29, 3, '2024-07-11 18:46:04'),
(145, 29, 5, '2024-07-11 18:46:04'),
(146, 29, 1, '2024-07-11 18:46:04'),
(147, 29, 14, '2024-07-11 18:46:04'),
(148, 29, 22, '2024-07-11 18:46:04'),
(149, 29, 7, '2024-07-11 18:46:04'),
(150, 30, 4, '2024-07-11 18:46:04'),
(151, 30, 22, '2024-07-11 18:46:04'),
(152, 30, 6, '2024-07-11 18:46:04'),
(153, 30, 14, '2024-07-11 18:46:04'),
(154, 31, 1, '2024-07-11 18:55:19'),
(155, 31, 3, '2024-07-11 18:55:19'),
(156, 31, 6, '2024-07-11 18:55:19'),
(157, 31, 7, '2024-07-11 18:55:19'),
(158, 31, 11, '2024-07-11 18:55:19'),
(159, 31, 14, '2024-07-11 18:55:19'),
(160, 31, 22, '2024-07-11 18:55:19'),
(161, 32, 1, '2024-07-11 18:55:19'),
(162, 32, 3, '2024-07-11 18:55:19'),
(163, 32, 7, '2024-07-11 18:55:19'),
(164, 32, 10, '2024-07-11 18:55:19'),
(165, 32, 6, '2024-07-11 18:55:19'),
(166, 33, 1, '2024-07-11 19:00:25'),
(167, 33, 2, '2024-07-11 19:00:25'),
(168, 33, 6, '2024-07-11 19:00:25'),
(169, 33, 7, '2024-07-11 19:00:25'),
(170, 33, 10, '2024-07-11 19:00:25'),
(171, 33, 12, '2024-07-11 19:00:25'),
(172, 33, 14, '2024-07-11 19:00:25'),
(173, 34, 1, '2024-07-11 19:00:25'),
(174, 34, 4, '2024-07-11 19:00:25'),
(175, 34, 10, '2024-07-11 19:00:25'),
(176, 34, 11, '2024-07-11 19:00:25'),
(177, 34, 14, '2024-07-11 19:00:25'),
(178, 34, 24, '2024-07-11 19:00:25'),
(179, 34, 22, '2024-07-11 19:00:25'),
(180, 35, 4, '2024-07-11 19:00:25'),
(181, 35, 5, '2024-07-11 19:00:25'),
(182, 35, 6, '2024-07-11 19:00:25'),
(183, 35, 1, '2024-07-11 19:00:25'),
(184, 35, 9, '2024-07-11 19:00:25'),
(185, 35, 11, '2024-07-11 19:00:25'),
(186, 35, 14, '2024-07-11 19:00:25'),
(187, 35, 7, '2024-07-11 19:00:25'),
(188, 36, 1, '2024-07-11 19:03:59'),
(189, 36, 2, '2024-07-11 19:03:59'),
(190, 36, 9, '2024-07-11 19:03:59'),
(191, 36, 14, '2024-07-11 19:03:59'),
(192, 36, 7, '2024-07-11 19:03:59'),
(193, 37, 1, '2024-07-11 19:03:59'),
(194, 37, 3, '2024-07-11 19:03:59'),
(195, 37, 9, '2024-07-11 19:03:59'),
(196, 37, 22, '2024-07-11 19:03:59'),
(197, 37, 6, '2024-07-11 19:03:59'),
(198, 38, 1, '2024-07-11 19:07:08'),
(199, 38, 2, '2024-07-11 19:07:08'),
(200, 38, 27, '2024-07-11 19:07:08'),
(201, 38, 7, '2024-07-11 19:07:08'),
(202, 38, 6, '2024-07-11 19:07:08'),
(203, 38, 11, '2024-07-11 19:07:08'),
(204, 38, 9, '2024-07-11 19:07:08'),
(205, 38, 8, '2024-07-11 19:07:08'),
(206, 38, 22, '2024-07-11 19:07:08'),
(207, 39, 28, '2024-07-11 19:10:34'),
(208, 39, 29, '2024-07-11 19:10:34'),
(209, 39, 30, '2024-07-11 19:10:34'),
(210, 39, 31, '2024-07-11 19:10:34'),
(211, 39, 32, '2024-07-11 19:10:34'),
(212, 40, 33, '2024-07-11 19:10:34'),
(213, 40, 29, '2024-07-11 19:10:34'),
(214, 40, 28, '2024-07-11 19:10:34'),
(215, 40, 31, '2024-07-11 19:10:34'),
(216, 41, 1, '2024-07-14 17:56:42'),
(217, 41, 2, '2024-07-14 17:56:42'),
(218, 41, 3, '2024-07-14 17:56:42'),
(219, 41, 4, '2024-07-14 17:56:42'),
(220, 42, 21, '2024-07-14 18:03:27'),
(223, 45, 2, '2024-08-21 20:34:51'),
(224, 45, 7, '2024-08-21 20:34:51'),
(225, 45, 6, '2024-08-21 20:34:51'),
(226, 45, 10, '2024-08-21 20:34:51'),
(227, 45, 11, '2024-08-21 20:34:51'),
(243, 50, 2, '2024-08-21 22:22:08'),
(244, 50, 7, '2024-08-21 22:22:08'),
(245, 50, 6, '2024-08-21 22:22:08'),
(246, 50, 1, '2024-08-21 22:22:08'),
(247, 51, 1, '2024-08-21 23:31:18'),
(248, 51, 3, '2024-08-21 23:31:18'),
(249, 51, 6, '2024-08-21 23:31:18'),
(250, 51, 7, '2024-08-21 23:31:18'),
(251, 51, 10, '2024-08-21 23:31:18'),
(252, 51, 11, '2024-08-21 23:31:18'),
(253, 51, 12, '2024-08-21 23:31:18'),
(254, 51, 14, '2024-08-21 23:31:18'),
(255, 51, 22, '2024-08-21 23:31:18'),
(256, 51, 24, '2024-08-21 23:31:18'),
(257, 52, 1, '2024-08-21 23:36:03'),
(258, 52, 2, '2024-08-21 23:36:03'),
(259, 52, 6, '2024-08-21 23:36:03'),
(260, 52, 7, '2024-08-21 23:36:03'),
(261, 52, 10, '2024-08-21 23:36:03'),
(262, 52, 11, '2024-08-21 23:36:03'),
(263, 52, 12, '2024-08-21 23:36:03'),
(264, 52, 14, '2024-08-21 23:36:03'),
(265, 52, 22, '2024-08-21 23:36:03'),
(266, 52, 24, '2024-08-21 23:36:03'),
(267, 53, 1, '2024-08-21 23:36:03'),
(268, 53, 2, '2024-08-21 23:36:03'),
(269, 53, 7, '2024-08-21 23:36:03'),
(270, 53, 6, '2024-08-21 23:36:03'),
(272, 55, 1, '2024-08-22 01:25:28'),
(274, 57, 1, '2024-08-22 18:02:18'),
(276, 59, 8, '2024-08-24 23:47:14'),
(277, 59, 9, '2024-08-24 23:47:14'),
(278, 59, 10, '2024-08-24 23:47:14'),
(279, 59, 19, '2024-08-24 23:47:14'),
(280, 59, 17, '2024-08-24 23:47:14'),
(281, 59, 16, '2024-08-24 23:47:14'),
(282, 59, 15, '2024-08-24 23:47:14');

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`id`, `name`, `created_at`) VALUES
(1, 'Los Angeles', '2024-07-05 20:13:04'),
(2, 'New York City', '2024-07-05 20:14:55'),
(3, 'Miami', '2024-07-05 20:17:11'),
(4, 'Oregon', '2024-07-05 20:17:22'),
(5, 'Austin', '2024-07-05 20:18:03'),
(6, 'Chicago', '2024-07-05 20:18:39'),
(7, 'Las Vegas', '2024-07-05 20:19:10');

-- --------------------------------------------------------

--
-- Table structure for table `element`
--

CREATE TABLE `element` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `element`
--

INSERT INTO `element` (`id`, `name`, `created_at`) VALUES
(1, 'TV', '2024-07-06 17:10:01'),
(2, 'Bed (King)', '2024-07-06 17:36:51'),
(3, 'Bed (Queen)', '2024-07-06 17:37:19'),
(4, 'Bed (Twin)', '2024-07-06 17:38:33'),
(5, 'Bed (Single)', '2024-07-06 17:38:59'),
(6, 'Night table', '2024-07-06 17:40:15'),
(7, 'AC', '2024-07-06 17:40:35'),
(8, 'Wardrobe (Single)', '2024-07-06 17:42:29'),
(9, 'Wardrobe (Double)', '2024-07-06 17:42:36'),
(10, 'Wardrobe (Triple)', '2024-07-06 17:42:41'),
(11, 'Mirror', '2024-07-06 17:43:11'),
(12, 'Desk', '2024-07-06 17:43:25'),
(14, 'Lamp', '2024-07-06 17:51:13'),
(15, 'Fridge', '2024-07-06 19:32:34'),
(16, 'Oven', '2024-07-06 19:32:48'),
(17, 'Dishwasher', '2024-07-06 19:32:55'),
(19, 'Kettle', '2024-07-06 19:33:59'),
(20, 'Microwave', '2024-07-06 19:34:05'),
(21, 'Ventilator', '2024-07-06 19:35:56'),
(22, 'Ceiling fan', '2024-07-06 19:36:35'),
(24, 'Bookshelf', '2024-07-07 01:04:36'),
(27, 'Sofa', '2024-07-07 04:54:54'),
(28, 'Washing machine', '2024-07-08 19:33:27'),
(29, 'Toilet', '2024-07-08 19:34:32'),
(30, 'Urinal', '2024-07-08 19:34:37'),
(31, 'Dryer machine', '2024-07-08 19:35:13'),
(32, 'Bathtub', '2024-07-08 19:35:34'),
(33, 'Shower cabin', '2024-07-08 19:35:52'),
(34, 'Sink', '2024-08-22 01:28:03'),
(38, 'Table', '2024-08-22 17:10:14'),
(39, 'Chair', '2024-08-22 17:10:19'),
(40, 'Fireplace', '2024-08-22 17:11:32'),
(41, 'Cabinets', '2024-08-22 17:12:17');

-- --------------------------------------------------------

--
-- Table structure for table `garage`
--

CREATE TABLE `garage` (
  `id` int(11) NOT NULL,
  `area` int(11) NOT NULL,
  `created_at` int(11) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `garage`
--

INSERT INTO `garage` (`id`, `area`, `created_at`) VALUES
(6, 100, 2147483647),
(7, 175, 2147483647),
(8, 125, 2147483647),
(9, 125, 2147483647),
(15, 23, 2147483647),
(17, 50, 2147483647),
(18, 25, 2147483647),
(19, 30, 2147483647),
(21, 44, 2147483647),
(22, 55, 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `kitchen`
--

CREATE TABLE `kitchen` (
  `id` int(11) NOT NULL,
  `area` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kitchen`
--

INSERT INTO `kitchen` (`id`, `area`, `created_at`) VALUES
(14, 150, '2024-07-08 20:03:16'),
(15, 300, '2024-07-11 18:46:04'),
(16, 200, '2024-07-11 18:55:19'),
(17, 250, '2024-07-11 19:00:25'),
(18, 200, '2024-07-11 19:03:59'),
(19, 225, '2024-07-11 19:07:08'),
(20, 275, '2024-07-11 19:10:34'),
(21, 33333, '2024-07-14 17:56:42'),
(22, 3, '2024-07-14 18:03:27'),
(23, 22, '2024-08-21 14:52:21'),
(25, 70, '2024-08-21 20:34:51'),
(29, 125, '2024-08-21 23:36:03'),
(32, 125, '2024-08-22 01:22:55'),
(33, 55, '2024-08-22 18:02:18'),
(34, 42, '2024-08-24 23:44:41');

-- --------------------------------------------------------

--
-- Table structure for table `kitchen_element`
--

CREATE TABLE `kitchen_element` (
  `id` int(11) NOT NULL,
  `kitchen_id` int(11) NOT NULL,
  `element_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kitchen_element`
--

INSERT INTO `kitchen_element` (`id`, `kitchen_id`, `element_id`, `created_at`) VALUES
(51, 14, 15, '2024-07-08 20:03:16'),
(52, 14, 16, '2024-07-08 20:03:16'),
(53, 14, 17, '2024-07-08 20:03:16'),
(54, 14, 19, '2024-07-08 20:03:16'),
(55, 14, 20, '2024-07-08 20:03:16'),
(56, 14, 21, '2024-07-08 20:03:16'),
(57, 14, 24, '2024-07-08 20:03:16'),
(58, 15, 15, '2024-07-11 18:46:04'),
(59, 15, 16, '2024-07-11 18:46:04'),
(60, 15, 17, '2024-07-11 18:46:04'),
(61, 15, 19, '2024-07-11 18:46:04'),
(62, 15, 20, '2024-07-11 18:46:04'),
(63, 15, 21, '2024-07-11 18:46:04'),
(64, 16, 17, '2024-07-11 18:55:19'),
(65, 16, 15, '2024-07-11 18:55:19'),
(66, 16, 16, '2024-07-11 18:55:19'),
(67, 16, 19, '2024-07-11 18:55:19'),
(68, 16, 21, '2024-07-11 18:55:19'),
(69, 17, 17, '2024-07-11 19:00:25'),
(70, 17, 20, '2024-07-11 19:00:25'),
(71, 17, 21, '2024-07-11 19:00:25'),
(72, 17, 16, '2024-07-11 19:00:25'),
(73, 17, 15, '2024-07-11 19:00:25'),
(74, 18, 15, '2024-07-11 19:03:59'),
(75, 18, 16, '2024-07-11 19:03:59'),
(76, 18, 17, '2024-07-11 19:03:59'),
(77, 18, 19, '2024-07-11 19:03:59'),
(78, 18, 20, '2024-07-11 19:03:59'),
(79, 18, 21, '2024-07-11 19:03:59'),
(80, 19, 16, '2024-07-11 19:07:08'),
(81, 19, 15, '2024-07-11 19:07:08'),
(82, 19, 17, '2024-07-11 19:07:08'),
(83, 19, 20, '2024-07-11 19:07:08'),
(84, 19, 21, '2024-07-11 19:07:08'),
(85, 20, 20, '2024-07-11 19:10:34'),
(86, 20, 19, '2024-07-11 19:10:34'),
(87, 20, 21, '2024-07-11 19:10:34'),
(88, 20, 17, '2024-07-11 19:10:34'),
(89, 20, 16, '2024-07-11 19:10:34'),
(90, 20, 15, '2024-07-11 19:10:34'),
(91, 21, 3, '2024-07-14 17:56:42'),
(92, 22, 28, '2024-07-14 18:03:27'),
(93, 23, 10, '2024-08-21 14:52:21'),
(95, 25, 19, '2024-08-21 20:34:51'),
(96, 25, 16, '2024-08-21 20:34:51'),
(97, 25, 17, '2024-08-21 20:34:51'),
(98, 25, 20, '2024-08-21 20:34:51'),
(99, 25, 21, '2024-08-21 20:34:51'),
(100, 25, 19, '2024-08-21 20:34:51'),
(119, 29, 15, '2024-08-21 23:36:03'),
(120, 29, 16, '2024-08-21 23:36:03'),
(121, 29, 20, '2024-08-21 23:36:03'),
(122, 29, 17, '2024-08-21 23:36:03'),
(123, 29, 19, '2024-08-21 23:36:03'),
(124, 29, 21, '2024-08-21 23:36:03'),
(125, 29, 22, '2024-08-21 23:36:03'),
(126, 29, 12, '2024-08-21 23:36:03'),
(130, 32, 1, '2024-08-22 01:22:55'),
(131, 33, 3, '2024-08-22 18:02:18'),
(132, 34, 20, '2024-08-24 23:44:41');

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `name`, `email`, `message`, `created_at`) VALUES
(14, 'John Doe', 'johndoe@gmail.com', 'hello world!!', '2024-07-13 18:11:45'),
(18, 'mirko', 'mire99@gmail.com', 'mirkomirkomirko', '2024-08-22 17:53:13'),
(21, 'Jack', 'jackson23@aol.com', 'Fill in the form on the right, so we can schedule it.', '2024-08-22 17:54:53'),
(25, 'mike', 'magicmike@aol.com', 'I Heard It Through The Grapevine\n', '2024-08-24 23:41:46');

-- --------------------------------------------------------

--
-- Table structure for table `pool`
--

CREATE TABLE `pool` (
  `id` int(11) NOT NULL,
  `area` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pool`
--

INSERT INTO `pool` (`id`, `area`, `created_at`) VALUES
(5, 30, '2024-07-08 20:03:16'),
(6, 150, '2024-07-11 19:00:25'),
(7, 200, '2024-07-11 19:10:34'),
(24, 50, '2024-08-21 23:36:03'),
(27, 25, '2024-08-22 01:07:39');

-- --------------------------------------------------------

--
-- Table structure for table `property`
--

CREATE TABLE `property` (
  `id` int(11) NOT NULL,
  `title` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `img` varchar(255) NOT NULL,
  `state_id` int(11) NOT NULL,
  `city_id` int(11) NOT NULL,
  `address` varchar(50) NOT NULL,
  `total_area` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `price_fixed` bit(1) NOT NULL,
  `floors` int(11) NOT NULL,
  `garden` int(11) NOT NULL,
  `owner_email` varchar(50) NOT NULL,
  `owner_phone` varchar(30) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `property`
--

INSERT INTO `property` (`id`, `title`, `description`, `img`, `state_id`, `city_id`, `address`, `total_area`, `price`, `price_fixed`, `floors`, `garden`, `owner_email`, `owner_phone`, `created_at`) VALUES
(50, 'Beautiful Family Home', 'A spacious and modern family home with all the amenities.', '/assets/image/houses/house1.jpg', 1, 1, '1234 Sunset Blvd', 830, 1200000, b'1', 1, 225, 'example@example.com', '+123 4567-89', '2024-07-08 20:03:16'),
(51, 'Luxury Villa', 'An extravagant villa with stunning views and luxury features.', '/assets/image/houses/house2.jpg', 4, 3, '5678 Ocean Drive', 2525, 2500000, b'0', 1, 1000, 'owner2@example.com', '234-567-8901', '2024-07-11 18:46:04'),
(52, 'Cozy Cottage', 'A charming cottage perfect for a small family or couple.', '/assets/image/houses/house3.jpg', 6, 4, '7890 Pine Street', 1475, 500000, b'0', 1, 600, 'owner3@example.com', '345-678-9012', '2024-07-11 18:55:19'),
(53, 'Modern Townhouse', 'A sleek townhouse in a prime location with modern amenities.', '/assets/image/houses/house4.jpg', 3, 2, '1011 Broadway', 2025, 1800000, b'1', 2, 700, 'owner4@example.com', '456-789-0123', '2024-07-11 19:00:25'),
(54, 'Rustic Farmhouse', 'A rustic farmhouse with a lot of character and charm.', '/assets/image/houses/house5.jpg', 7, 5, '1213 Ranch Road', 1650, 800000, b'0', 2, 1000, 'owner5@example.com', '567-890-1234', '2024-07-11 19:03:59'),
(55, 'Suburban Home', 'A perfect suburban home in a friendly neighborhood.', '/assets/image/houses/house6.jpg', 8, 6, '1415 Maple Avenue', 1125, 450000, b'0', 2, 600, 'owner6@example.com', '678-901-2345', '2024-07-11 19:07:08'),
(56, 'Modern mansion', 'A grand mansion with elegant interiors and luxurious features.', '/assets/image/houses/house7.jpg', 9, 7, '1617 Casino Road', 2095, 1200000, b'1', 2, 1200, 'owner7@example.com', '789-012-3456', '2024-07-11 19:10:34');

-- --------------------------------------------------------

--
-- Table structure for table `property_bathroom`
--

CREATE TABLE `property_bathroom` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `bathroom_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `property_bathroom`
--

INSERT INTO `property_bathroom` (`id`, `property_id`, `bathroom_id`, `created_at`) VALUES
(8, 50, 8, '2024-07-08 20:03:16'),
(9, 50, 9, '2024-07-08 20:03:16'),
(10, 51, 10, '2024-07-11 18:46:04'),
(11, 51, 11, '2024-07-11 18:46:04'),
(12, 52, 12, '2024-07-11 18:55:19'),
(13, 53, 13, '2024-07-11 19:00:25'),
(14, 53, 14, '2024-07-11 19:00:25'),
(15, 54, 15, '2024-07-11 19:03:59'),
(16, 54, 16, '2024-07-11 19:03:59'),
(17, 55, 17, '2024-07-11 19:07:08'),
(18, 55, 18, '2024-07-11 19:07:08'),
(19, 56, 19, '2024-07-11 19:10:34'),
(20, 56, 20, '2024-07-11 19:10:34');

-- --------------------------------------------------------

--
-- Table structure for table `property_bedroom`
--

CREATE TABLE `property_bedroom` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `bedroom_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `property_bedroom`
--

INSERT INTO `property_bedroom` (`id`, `property_id`, `bedroom_id`, `created_at`) VALUES
(26, 50, 26, '2024-07-08 20:03:16'),
(27, 50, 27, '2024-07-08 20:03:16'),
(28, 51, 28, '2024-07-11 18:46:04'),
(29, 51, 29, '2024-07-11 18:46:04'),
(30, 51, 30, '2024-07-11 18:46:04'),
(31, 52, 31, '2024-07-11 18:55:19'),
(32, 52, 32, '2024-07-11 18:55:19'),
(33, 53, 33, '2024-07-11 19:00:25'),
(34, 53, 34, '2024-07-11 19:00:25'),
(35, 53, 35, '2024-07-11 19:00:25'),
(36, 54, 36, '2024-07-11 19:03:59'),
(37, 54, 37, '2024-07-11 19:03:59'),
(38, 55, 38, '2024-07-11 19:07:08'),
(39, 56, 39, '2024-07-11 19:10:34'),
(40, 56, 40, '2024-07-11 19:10:34');

-- --------------------------------------------------------

--
-- Table structure for table `property_garage`
--

CREATE TABLE `property_garage` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `garage_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `property_garage`
--

INSERT INTO `property_garage` (`id`, `property_id`, `garage_id`, `created_at`) VALUES
(6, 50, 6, '2024-07-08 20:03:16'),
(7, 51, 7, '2024-07-11 18:46:04'),
(8, 52, 8, '2024-07-11 18:55:19'),
(9, 53, 9, '2024-07-11 19:00:25'),
(18, 56, 18, '2024-08-22 01:01:18');

-- --------------------------------------------------------

--
-- Table structure for table `property_kitchen`
--

CREATE TABLE `property_kitchen` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `kitchen_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `property_kitchen`
--

INSERT INTO `property_kitchen` (`id`, `property_id`, `kitchen_id`, `created_at`) VALUES
(14, 50, 14, '2024-07-08 20:03:16'),
(15, 51, 15, '2024-07-11 18:46:04'),
(16, 52, 16, '2024-07-11 18:55:19'),
(17, 53, 17, '2024-07-11 19:00:25'),
(18, 54, 18, '2024-07-11 19:03:59'),
(19, 55, 19, '2024-07-11 19:07:08'),
(20, 56, 20, '2024-07-11 19:10:34');

-- --------------------------------------------------------

--
-- Table structure for table `property_pool`
--

CREATE TABLE `property_pool` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `pool_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `property_pool`
--

INSERT INTO `property_pool` (`id`, `property_id`, `pool_id`, `created_at`) VALUES
(5, 50, 5, '2024-07-08 20:03:16'),
(6, 53, 6, '2024-07-11 19:00:25'),
(7, 56, 7, '2024-07-11 19:10:34');

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE `state` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`id`, `name`, `created_at`) VALUES
(1, 'California', '2024-07-05 04:37:42'),
(3, 'New York', '2024-07-05 15:11:24'),
(4, 'Florida', '2024-07-05 15:12:29'),
(6, 'Portland', '2024-07-05 18:26:16'),
(7, 'Texas', '2024-07-05 20:18:09'),
(8, 'Illinois', '2024-07-05 20:18:46'),
(9, 'Nevada', '2024-07-05 20:19:04');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(30) NOT NULL,
  `pw` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `username`, `pw`, `created_at`) VALUES
(1, 'admin@admin.rs', 'admin', '$2y$10$kOGbq9W/jEEBGeF9BBvL3.tPAO39ZontUiQhV6Gfp2GFWg/dAHOva', '2024-07-01 00:40:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bathroom`
--
ALTER TABLE `bathroom`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bathroom_element`
--
ALTER TABLE `bathroom_element`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bathroom_id` (`bathroom_id`,`element_id`),
  ADD KEY `element_id` (`element_id`);

--
-- Indexes for table `bedroom`
--
ALTER TABLE `bedroom`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bedroom_element`
--
ALTER TABLE `bedroom_element`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bedroom_id` (`bedroom_id`,`element_id`),
  ADD KEY `element_id` (`element_id`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `element`
--
ALTER TABLE `element`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `garage`
--
ALTER TABLE `garage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kitchen`
--
ALTER TABLE `kitchen`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kitchen_element`
--
ALTER TABLE `kitchen_element`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kitchen_id` (`kitchen_id`,`element_id`),
  ADD KEY `element_id` (`element_id`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pool`
--
ALTER TABLE `pool`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `property`
--
ALTER TABLE `property`
  ADD PRIMARY KEY (`id`),
  ADD KEY `state_id` (`state_id`,`city_id`),
  ADD KEY `city_id` (`city_id`);

--
-- Indexes for table `property_bathroom`
--
ALTER TABLE `property_bathroom`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_id` (`property_id`,`bathroom_id`),
  ADD KEY `bathroom_id` (`bathroom_id`);

--
-- Indexes for table `property_bedroom`
--
ALTER TABLE `property_bedroom`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_id` (`property_id`,`bedroom_id`),
  ADD KEY `bedroom_id` (`bedroom_id`);

--
-- Indexes for table `property_garage`
--
ALTER TABLE `property_garage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_id` (`property_id`,`garage_id`),
  ADD KEY `garage_id` (`garage_id`);

--
-- Indexes for table `property_kitchen`
--
ALTER TABLE `property_kitchen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_id` (`property_id`,`kitchen_id`),
  ADD KEY `kitchen_id` (`kitchen_id`);

--
-- Indexes for table `property_pool`
--
ALTER TABLE `property_pool`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_id` (`property_id`,`pool_id`),
  ADD KEY `pool_id` (`pool_id`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username_unique` (`username`),
  ADD UNIQUE KEY `email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bathroom`
--
ALTER TABLE `bathroom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `bathroom_element`
--
ALTER TABLE `bathroom_element`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;

--
-- AUTO_INCREMENT for table `bedroom`
--
ALTER TABLE `bedroom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `bedroom_element`
--
ALTER TABLE `bedroom_element`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=283;

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `element`
--
ALTER TABLE `element`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `garage`
--
ALTER TABLE `garage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `kitchen`
--
ALTER TABLE `kitchen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `kitchen_element`
--
ALTER TABLE `kitchen_element`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=133;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `pool`
--
ALTER TABLE `pool`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `property`
--
ALTER TABLE `property`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `property_bathroom`
--
ALTER TABLE `property_bathroom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `property_bedroom`
--
ALTER TABLE `property_bedroom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `property_garage`
--
ALTER TABLE `property_garage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `property_kitchen`
--
ALTER TABLE `property_kitchen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `property_pool`
--
ALTER TABLE `property_pool`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `state`
--
ALTER TABLE `state`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bathroom_element`
--
ALTER TABLE `bathroom_element`
  ADD CONSTRAINT `bathroom_element_ibfk_1` FOREIGN KEY (`bathroom_id`) REFERENCES `bathroom` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `bathroom_element_ibfk_2` FOREIGN KEY (`element_id`) REFERENCES `element` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `bedroom_element`
--
ALTER TABLE `bedroom_element`
  ADD CONSTRAINT `bedroom_element_ibfk_2` FOREIGN KEY (`element_id`) REFERENCES `element` (`id`),
  ADD CONSTRAINT `bedroom_element_ibfk_3` FOREIGN KEY (`bedroom_id`) REFERENCES `bedroom` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `kitchen_element`
--
ALTER TABLE `kitchen_element`
  ADD CONSTRAINT `kitchen_element_ibfk_2` FOREIGN KEY (`element_id`) REFERENCES `element` (`id`),
  ADD CONSTRAINT `kitchen_element_ibfk_3` FOREIGN KEY (`kitchen_id`) REFERENCES `kitchen` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `property`
--
ALTER TABLE `property`
  ADD CONSTRAINT `property_ibfk_1` FOREIGN KEY (`state_id`) REFERENCES `state` (`id`),
  ADD CONSTRAINT `property_ibfk_2` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`);

--
-- Constraints for table `property_bathroom`
--
ALTER TABLE `property_bathroom`
  ADD CONSTRAINT `property_bathroom_ibfk_3` FOREIGN KEY (`bathroom_id`) REFERENCES `bathroom` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `property_bathroom_ibfk_4` FOREIGN KEY (`property_id`) REFERENCES `property` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `property_bedroom`
--
ALTER TABLE `property_bedroom`
  ADD CONSTRAINT `property_bedroom_ibfk_2` FOREIGN KEY (`bedroom_id`) REFERENCES `bedroom` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `property_bedroom_ibfk_3` FOREIGN KEY (`property_id`) REFERENCES `property` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `property_garage`
--
ALTER TABLE `property_garage`
  ADD CONSTRAINT `property_garage_ibfk_3` FOREIGN KEY (`garage_id`) REFERENCES `garage` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `property_garage_ibfk_4` FOREIGN KEY (`property_id`) REFERENCES `property` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `property_kitchen`
--
ALTER TABLE `property_kitchen`
  ADD CONSTRAINT `property_kitchen_ibfk_3` FOREIGN KEY (`kitchen_id`) REFERENCES `kitchen` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `property_kitchen_ibfk_4` FOREIGN KEY (`property_id`) REFERENCES `property` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `property_pool`
--
ALTER TABLE `property_pool`
  ADD CONSTRAINT `property_pool_ibfk_3` FOREIGN KEY (`pool_id`) REFERENCES `pool` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `property_pool_ibfk_4` FOREIGN KEY (`property_id`) REFERENCES `property` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
