-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 19-Jul-2024 às 15:07
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sensordinformsv2`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `contacts`
--

CREATE TABLE `contacts` (
  `contact_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `subject` varchar(100) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `contacts`
--

INSERT INTO `contacts` (`contact_id`, `user_id`, `subject`, `message`, `date`) VALUES
(1, 8, 'TesteRececao', 'asasas', '2024-07-12 14:09:58'),
(2, 9, 'TesteRececao', 'asasas', '2024-07-12 14:11:03'),
(3, 10, 'TesteRececao', 'asasas', '2024-07-12 14:11:30'),
(4, 11, 'TesteRececao', 'Teste rececao', '2024-07-12 14:11:54'),
(5, 12, 'TesteRececao', 'Teste rececao', '2024-07-12 14:11:56'),
(6, 13, 'TesteRececao', 'Teste rececao', '2024-07-12 14:13:06');

-- --------------------------------------------------------

--
-- Estrutura da tabela `guarantees`
--

CREATE TABLE `guarantees` (
  `guarantee_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `invoice_date` date DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `product_ref` varchar(20) DEFAULT NULL,
  `serial_number` varchar(20) DEFAULT NULL,
  `invoice_number` varchar(255) DEFAULT NULL,
  `equipment_in_use` tinyint(1) DEFAULT NULL,
  `damage_mentioned` tinyint(1) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `messages`
--

CREATE TABLE `messages` (
  `message_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `questionsanddoubts`
--

CREATE TABLE `questionsanddoubts` (
  `question_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `questionsanddoubts`
--

INSERT INTO `questionsanddoubts` (`question_id`, `user_id`, `message`, `date`) VALUES
(1, 25, 'asasa', '2024-07-15 08:29:24'),
(2, 26, 'asasa', '2024-07-15 08:29:24');

-- --------------------------------------------------------

--
-- Estrutura da tabela `repairs`
--

CREATE TABLE `repairs` (
  `repair_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `invoice_date` date DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `product_ref` varchar(20) DEFAULT NULL,
  `serial_number` varchar(20) DEFAULT NULL,
  `invoice_number` varchar(20) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `returns`
--

CREATE TABLE `returns` (
  `return_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `invoice_date` date DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `product_ref` varchar(20) DEFAULT NULL,
  `serial_number` varchar(20) DEFAULT NULL,
  `invoice_number` varchar(20) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `returns`
--

INSERT INTO `returns` (`return_id`, `user_id`, `invoice_date`, `quantity`, `product_ref`, `serial_number`, `invoice_number`, `state`, `message`, `date`) VALUES
(1, 1, '2024-07-17', 1, '111111111', '123456789', '11111111', '', 'ggkkggk', '2024-07-12 08:35:33'),
(2, 2, '2024-07-17', 1, '111111111', '123456789', '11111111', '', 'ggkkggk', '2024-07-12 08:35:38'),
(3, 5, '2024-07-17', 1, '111111111', '123456789', '11111111', 'Embalagem em bom estado', 'ggkkggk', '2024-07-12 08:47:59'),
(4, 6, '2024-07-11', 2, '987654321', 'SN123456', 'INV123456', 'Embalagem em bom estado', 'Gostaria de devolver este produto devido a um defeito.', '2024-07-12 13:48:57'),
(5, 7, '2024-07-11', 2, '987654321', 'SN123456', 'INV123456', 'Embalagem em bom estado', 'Gostaria de devolver este produto devido a um defeito.', '2024-07-12 14:09:47'),
(6, 14, '2024-07-08', 1, '111', 'FS111', '11111111', '', 'GGGGG', '2024-07-12 14:46:35'),
(7, 15, '2024-07-08', 1, '111', 'FS111', '11111111', '', 'GGGGG', '2024-07-12 14:48:48'),
(8, 16, '2024-07-11', 1, '12121', '111aas1', '11111111', 'Equipamento utilizado', '11', '2024-07-12 15:41:35'),
(9, 17, '2024-07-08', 1, '111', 'FS111', '11111111', '', 'GGGGG', '2024-07-12 15:53:48'),
(10, 18, '2024-07-08', 1, '111', 'FS111', '11111111', '', 'GGGGG', '2024-07-12 15:55:44'),
(11, 19, '2024-07-08', 1, '111', 'FS111', '11111111', '', 'GGGGG', '2024-07-12 16:00:06'),
(12, 20, '2024-07-08', 1, '111', 'FS111', '11111111', '', 'GGGGG', '2024-07-12 16:01:47'),
(13, 21, '2024-07-08', 1, '111', 'FS111', '11111111', '', 'GGGGG', '2024-07-12 16:05:41'),
(14, 22, '2024-07-11', 1, '111a', '111a', '11111111', '', 'aaa', '2024-07-12 16:13:55'),
(15, 23, '2024-07-11', 1, '111a', '111a', '11111111', '', 'aaa', '2024-07-12 16:14:21');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `company` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `vat_number` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`user_id`, `name`, `phone`, `company`, `email`, `vat_number`) VALUES
(1, 'Tiago', '909 092 290', 'Solinf', 'tiago.a.marquez@gmail.com', '123456789'),
(2, 'Tiago', '909 092 290', 'Solinf', 'tiago.a.marquez@gmail.com', '123456789'),
(3, 'Tiago', '909 092 290', 'Solinf', 'tiago.a.marquez@gmail.com', '123456789'),
(4, 'Tiago', '909 092 290', 'Solinf', 'tiago.a.marquez@gmail.com', '123456789'),
(5, 'Tiago', '909 092 290', 'Solinf', 'tiago.a.marquez@gmail.com', '123456789'),
(6, 'João Silva', '999999999', 'Empresa XYZ', 'joao.silva@example.com', '123456789'),
(7, 'João Silva', '999999999', 'Empresa XYZ', 'joao.silva@example.com', '123456789'),
(8, 'Tiago', '909092290', 'Solinf', 'tiago.a.marquez@gmail.com', NULL),
(9, 'Tiago', '909092290', 'Solinf', 'tiago.a.marquez@gmail.com', NULL),
(10, 'Tiago', '909092290', 'Solinf', 'tiago.a.marquez@gmail.com', NULL),
(11, 'Tiago', '909092290', 'Solinf', 'tiago.a.marquez@gmail.com', NULL),
(12, 'Tiago', '909092290', 'Solinf', 'tiago.a.marquez@gmail.com', NULL),
(13, 'Tiago', '909092290', 'Solinf', 'tiago.a.marquez@gmail.com', NULL),
(14, 'Tiago', '909092290', 'Solinf', 'tiago.a.marquez@gmail.com', '111'),
(15, 'Tiago', '909092290', 'Solinf', 'tiago.a.marquez@gmail.com', '111'),
(16, 'Tiago', '909092290', 'Solinf', 'tiago.a.marquez@gmail.com', '111111111'),
(17, 'Tiago', '909092290', 'Solinf', 'tiago.a.marquez@gmail.com', '111'),
(18, 'Tiago', '909092290', 'Solinf', 'tiago.a.marquez@gmail.com', '111'),
(19, 'Tiago', '909092290', 'Solinf', 'tiago.a.marquez@gmail.com', '111'),
(20, 'Tiago', '909092290', 'Solinf', 'bruno.rodrigues@solinf.pt', '111'),
(21, 'Tiago', '909092290', 'Solinf', 'bruno.rodrigues@solinf.pt', '111'),
(22, 'Tiago', '909092290', 'Solinf', 'tiago.a.marquez@gmail.com', '111111111'),
(23, 'Tiago', '909092290', 'Solinf', 'tiago.a.marquez@gmail.com', '111111111'),
(24, 'Tiago', '909 092 290', 'Solinf', 'tiago.a.marquez@gmail.com', NULL),
(25, 'Tiago', '909 092 290', 'Solinf', 'tiago.a.marquez@gmail.com', NULL),
(26, 'Tiago', '909 092 290', 'Solinf', 'tiago.a.marquez@gmail.com', NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`contact_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Índices para tabela `guarantees`
--
ALTER TABLE `guarantees`
  ADD PRIMARY KEY (`guarantee_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Índices para tabela `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`message_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Índices para tabela `questionsanddoubts`
--
ALTER TABLE `questionsanddoubts`
  ADD PRIMARY KEY (`question_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Índices para tabela `repairs`
--
ALTER TABLE `repairs`
  ADD PRIMARY KEY (`repair_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Índices para tabela `returns`
--
ALTER TABLE `returns`
  ADD PRIMARY KEY (`return_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `contacts`
--
ALTER TABLE `contacts`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `guarantees`
--
ALTER TABLE `guarantees`
  MODIFY `guarantee_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `messages`
--
ALTER TABLE `messages`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `questionsanddoubts`
--
ALTER TABLE `questionsanddoubts`
  MODIFY `question_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `repairs`
--
ALTER TABLE `repairs`
  MODIFY `repair_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `returns`
--
ALTER TABLE `returns`
  MODIFY `return_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `contacts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Limitadores para a tabela `guarantees`
--
ALTER TABLE `guarantees`
  ADD CONSTRAINT `guarantees_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Limitadores para a tabela `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Limitadores para a tabela `questionsanddoubts`
--
ALTER TABLE `questionsanddoubts`
  ADD CONSTRAINT `questionsanddoubts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Limitadores para a tabela `repairs`
--
ALTER TABLE `repairs`
  ADD CONSTRAINT `repairs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Limitadores para a tabela `returns`
--
ALTER TABLE `returns`
  ADD CONSTRAINT `returns_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
