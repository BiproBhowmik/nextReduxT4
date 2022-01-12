-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2022 at 05:03 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reacttestdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `adonis_schema`
--

CREATE TABLE `adonis_schema` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, 'database\\migrations\\1641895064315_hash_tags', 1, '2022-01-11 10:11:33');

-- --------------------------------------------------------

--
-- Table structure for table `hash_tags`
--

CREATE TABLE `hash_tags` (
  `id` int(10) UNSIGNED NOT NULL,
  `hastag` varchar(255) DEFAULT NULL,
  `count` int(11) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hash_tags`
--

INSERT INTO `hash_tags` (`id`, `hastag`, `count`, `created_at`, `updated_at`) VALUES
(3, '#hashTag', 1, '2022-01-11 10:55:49', '2022-01-11 10:55:49'),
(4, '#bhowmik', 3, '2022-01-11 11:02:42', '2022-01-11 10:56:17'),
(5, '#PUSHPA', 1, '2022-01-11 11:37:36', '2022-01-11 11:37:36');

-- --------------------------------------------------------

--
-- Table structure for table `people`
--

CREATE TABLE `people` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `people`
--

INSERT INTO `people` (`id`, `name`, `email`, `title`, `image`, `created_at`, `updated_at`) VALUES
(276, 'Bipro', 'joybhowmik5@yahoo.com', 'this is <a href=\'http://localhost:3000/test?queary=hashTag\'>#hashTag</a> for demo', 'http://localhost:3333/demo.png', '2022-01-11 16:55:49', '2022-01-11 16:55:49'),
(277, 'Bipro', 'joybhowmik5@yahoo.com', '<a href=\'http://localhost:3000/test?queary=bhowmik\'>#bhowmik</a>', 'http://localhost:3333/Capture.PNG', '2022-01-11 16:56:17', '2022-01-11 16:56:17'),
(278, 'Bipro', 'joybhowmik5@yahoo.com', '<a href=\'http://localhost:3000/test?queary=bhowmik\'>#bhowmik</a> Bipro', 'http://localhost:3333/nature-3082832__480.jpg', '2022-01-11 16:56:40', '2022-01-11 16:56:40'),
(279, 'Bipro Bhowmik Joy', 'joybhowmik5@yahoo.com', 'Title of Bipro <a href=\'http://localhost:3000/test?queary=bhowmik\'>#bhowmik</a> Joy', 'http://localhost:3333/55698640_1650739448405596_7175583620701093888_n.jpg', '2022-01-11 17:02:42', '2022-01-11 17:02:42'),
(280, 'Pushpa', 'pushpa@gmail.com', '<a href=\'http://localhost:3000/test?queary=PUSHPA\'>#PUSHPA</a> : THE RISE এর দ্বিতীয় উইকেন্ড তথা ১০ দিন শেষে বক্স অফিস কালেকশন????  ???? তেলুগু স্টেটস → ১১৮.৭০ কোটি ', 'http://localhost:3333/ckxsqozcf0016iep87ezn4uwj.jpg', '2022-01-11 17:37:36', '2022-01-11 17:37:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hash_tags`
--
ALTER TABLE `hash_tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `hash_tags`
--
ALTER TABLE `hash_tags`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `people`
--
ALTER TABLE `people`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=281;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
