-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 25 Lis 2021, 17:37
-- Wersja serwera: 10.4.21-MariaDB
-- Wersja PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `db_sygnalista`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wiadomosc`
--

CREATE TABLE `wiadomosc` (
  `id_wiadomosci` int(11) NOT NULL,
  `wiadomosc` mediumtext NOT NULL,
  `data_` date NOT NULL,
  `id_zgloszenia` int(11) NOT NULL,
  `pierwszy` tinyint(1) DEFAULT NULL,
  `wiadmoscOperatora` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `wiadomosc`
--

INSERT INTO `wiadomosc` (`id_wiadomosci`, `wiadomosc`, `data_`, `id_zgloszenia`, `pierwszy`, `wiadmoscOperatora`) VALUES
(1, 'tst test nie pwoiem co nie wie t os? indormacje ', '2021-11-08', 2, 1, 0),
(2, 'tst test nie pwoiem co nie wie t os? indormacje ', '2021-11-25', 2, 0, 1),
(10, 'fhfghjghfvdh', '2021-11-03', 6, 1, 0),
(11, 'fhfghjghfvdh', '2021-11-03', 2, 1, 0),
(12, 'fhfghjsdfsdfsdfsdfsfdsdfsdfghfvdh', '2021-11-03', 6, 0, 0),
(13, 'fhfghjsdfsdfsdfsdfsfdsdfsdfghfvdh', '2021-11-03', 6, 0, 0),
(14, 'to jest to ', '2021-11-03', 6, 1, 0),
(15, 'to jest to 2', '2021-11-03', 6, 1, 0),
(16, 'to jest to 3', '2021-11-03', 6, 1, 0),
(17, 'wiadomosc nie iwm po co jedt', '2021-11-18', 38, 0, 0),
(18, 'rwerdhgdfhdfhgfgh', '2021-11-14', 39, 0, 0),
(19, 'odpowiedz test1', '2021-11-14', 40, 0, 0),
(20, '3333', '2021-11-14', 41, 0, 0),
(21, '3333', '2021-11-14', 41, 0, 0),
(22, '3333', '2021-11-14', 41, 0, 0),
(23, '3333', '2021-11-14', 41, 0, 0),
(24, '3333', '2021-11-14', 41, 0, 0),
(25, '3333', '2021-11-14', 41, 0, 0),
(26, '3333', '2021-11-14', 41, 0, 0),
(27, '3333', '2021-11-14', 41, 0, 0),
(28, '3333', '2021-11-14', 41, 0, 0),
(29, '3333', '2021-11-14', 41, 0, 0),
(30, '3333', '2021-11-14', 41, 0, 0),
(31, '3333', '2021-11-14', 41, 0, 0),
(32, '3333', '2021-11-14', 41, 0, 0),
(33, '3333', '2021-11-14', 41, 0, 0),
(34, '3333', '2021-11-14', 41, 0, 0),
(35, '3333', '2021-11-14', 41, 0, 0),
(36, '3333', '2021-11-14', 41, 0, 0),
(37, '3333', '2021-11-14', 41, 0, 0),
(38, 'wiadomosc nie iwm po co jedt', '2021-11-18', 38, 0, 0),
(39, '3333', '2021-11-14', 41, 0, 0),
(40, 'asdasd', '2021-11-14', 41, 0, 0),
(41, 'dupa', '2021-11-14', 41, 0, 0),
(42, 'dasdasdasd', '2021-11-14', 41, 0, 0),
(43, 'asdasdasd', '2021-11-14', 1, 0, 0),
(44, 'werwerwer', '2021-11-14', 32, 0, 0),
(45, 'xcbcxbcv', '2021-11-14', 43, 0, 0),
(46, 'xcbcxbcsdfsdfsdfsdfsdfsv', '2021-11-14', 43, 0, 0),
(47, 'asfdasfsdf', '2021-11-14', 53, 0, 0),
(48, 'efgdhfgjgh', '2021-11-15', 61, 0, 0),
(49, 'sgdfgdfhfg', '2021-11-15', 61, 0, 0),
(50, 'sgdfgdfhfgfdsdgfdf', '2021-11-15', 61, 0, 0),
(51, 'fbcgbcvbccvbcvnvbnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnbbbbbbbbbbbbbbbbbbbbbbbnvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv', '2021-11-18', 4, 0, 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `zgloszenie`
--

CREATE TABLE `zgloszenie` (
  `id_zgloszenia` int(11) NOT NULL,
  `tytul` varchar(500) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `kod` varchar(30) CHARACTER SET utf8 COLLATE utf8_polish_ci DEFAULT NULL,
  `wiadomosc` varchar(1000) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `CzyOperator` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `zgloszenie`
--

INSERT INTO `zgloszenie` (`id_zgloszenia`, `tytul`, `kod`, `wiadomosc`, `status`, `CzyOperator`) VALUES
(1, 'tytuł', '1', 'tst test nie pwoiem co nie wie t os? indormacje ', '2', 1),
(2, 'tytuł', '2', 'tst test nie pwoiem co nie wie t os? indormacje ', '3', 0),
(3, 'papaa', '3', 'to hjet to', '2', 0),
(4, 'papaa', '4', 'to hjet to', '2', 0),
(5, 'papaa', '5', 'to hjet to2', '2', 0),
(6, 'papaa', '6', 'to hjet toedrgdfcgd', '2', 0),
(7, '', '7', 'próba microfonu', '1', 0),
(8, '', '8', 'próba microfonu', '1', 0),
(11, '?', '?', '?', '?', 0),
(13, 'ij', 'd089f559-8f41-49ff-b40e-0a33a9', 'hu', '1', 0),
(14, 'ij', 'a55384ae-adf8-4721-95a1-ba7e68', 'hu', '1', 0),
(15, 'ijgnvbm', '4e4WsVToT9C0Y08n5oa85w==', 'humghmgh', '1', 0),
(16, 'asd', 'd9cc24e2', 'asd', '1', 0),
(17, 'asd', '74a6dcb3', 'asd', '1', 0),
(18, 'asd', 'b4fc0731', 'asd', '1', 0),
(19, 'asd', 'fb20d8e3', 'asd', '1', 0),
(20, 'asd', '2A3A448F', 'asd', '1', 0),
(21, 'asd', 'B4130D7B', 'asd', '1', 0),
(22, 'asd', 'D9865DDA', 'asd', '1', 0),
(23, 'asd', '3BB85BE1', 'asd', '1', 0),
(24, 'asd', '3297E07F', 'asd', '1', 0),
(25, 'asd', '975225DA', 'asd', '1', 0),
(26, 'asd', '29D9CFC6', 'asd', '1', 0),
(27, 'asd', '280CB2D4', 'asd', '1', 0),
(28, 'asd', '9BBF8200', 'asd', '1', 0),
(29, 'test1', '5AC89102', 'asdasdasd', '1', 0),
(30, 'dupa', '61F6654F', 'kwas', '1', 0),
(31, 'test dupy 2', '5E3DB1C8', 'tresc dupy 2', '1', 0),
(32, 'test dupy 3', '90B3DC88', 'tresc dupy 3', '1', 0),
(33, 'asdasd', 'A5AC973F', 'asdasd', '1', 0),
(34, 'asdasd', '1AC06940', 'asdasd', '1', 0),
(35, 'asda', 'CFA8BCE4', 'asdasd', '1', 0),
(36, 'asdasd', 'A097F0FA', 'asdasd', '1', 0),
(37, 'asd', '2D85DD76', 'asd', '1', 0),
(38, 'chuj', '9D3892CB', 'chujtresc', '1', 0),
(39, 'asd', '65A354B3', 'asd', '1', 0),
(40, 'test1', '955A45AC', 'wdasd', '1', 0),
(41, 'asdasd', '752A3145', 'asdasd', '1', 0),
(42, 'sdfsd', '773191B1', 'fdsfsdf', '1', 0),
(43, 'asfsdf', '351465D2', 'dsgfdfhfhg', '1', 0),
(44, '', 'FE25D88F', 'fasdfsfsdfsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', '1', 0),
(45, 'werwe', 'CC54BC74', 'werwer', '1', 0),
(46, 'werwe', '8D7925B4', 'werwer', '1', 0),
(47, 'sdfsdf', '2769C5A1', 'sdfsd', '1', 0),
(48, 'dsfsdfsdfs', 'E8A4A50E', 'sdfsdfsdfsdfsdf', '1', 0),
(49, 'dfgdfg', 'ACDF5907', 'dfgdfgdfgd', '1', 0),
(50, 'sdgfsdgdfg', 'CB7182DE', 'dfgdfgdfgdf', '1', 0),
(51, 'asdasf', '70B3D785', 'sdfsdf', '1', 0),
(52, 'sdfsd', '9ED031E9', 'fdg', '1', 0),
(53, 'dghfghj', '46FDE00F', 'khjkhjkhj', '1', 0),
(54, 'cjujumu', '74DCB135', 'fasdfa', '1', 0),
(55, 'cjujumu', 'BD99A730', 'fasdfa', '1', 0),
(56, 'cjujumu', '1C3FE910', 'fasdfa', '1', 0),
(57, 'cjujumu', '9E9BDD46', 'fasdfa', '1', 0),
(58, 'cjujumu', '0FB3FE85', 'fasdfa', '1', 0),
(59, 'cjujumu', '24286B33', 'fasdfa', '1', 0),
(60, 'dgf', 'A63E579B', 'hjgkhjlhj', '1', 0),
(61, 'asdasdfsd', '50A04458', 'dfsgdsfgdsfuhiusdahfuhsadfdfasdgdfshsdfhfdhgdfsgfsdgsd', '1', 0),
(62, 'sdfssssssssssssssasddddddddddddddddssssssssssssssssssssssssfdsdfgsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfssssssssssssssasddddddddddddddddssssssssssssssssssssssssfdsdfgsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfssssssssssssssasddddddddddddddddssssssssssssssssssssssssfdsdfgsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfssssssssssssssasddddddddddddddddssssssssssssssssssssssssfdsdfgsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfssssssssssssssasddddddddddddddddssssssssssssssssssssssssfdsdfgsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfssssssssssssssasddddddddddddddddsssss', '0F3A9D5F', 'sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfs', '1', 0),
(63, '1112313', 'AE106FD2', '1231231', '1', 0);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `wiadomosc`
--
ALTER TABLE `wiadomosc`
  ADD PRIMARY KEY (`id_wiadomosci`),
  ADD KEY `id_zgloszenia` (`id_zgloszenia`);

--
-- Indeksy dla tabeli `zgloszenie`
--
ALTER TABLE `zgloszenie`
  ADD PRIMARY KEY (`id_zgloszenia`),
  ADD UNIQUE KEY `kod` (`kod`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `wiadomosc`
--
ALTER TABLE `wiadomosc`
  MODIFY `id_wiadomosci` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT dla tabeli `zgloszenie`
--
ALTER TABLE `zgloszenie`
  MODIFY `id_zgloszenia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `wiadomosc`
--
ALTER TABLE `wiadomosc`
  ADD CONSTRAINT `wiadomosc_ibfk_1` FOREIGN KEY (`id_zgloszenia`) REFERENCES `zgloszenie` (`id_zgloszenia`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
