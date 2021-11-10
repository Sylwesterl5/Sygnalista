-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 10 Lis 2021, 13:51
-- Wersja serwera: 10.1.38-MariaDB
-- Wersja PHP: 7.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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
  `id_zgloszenia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `wiadomosc`
--

INSERT INTO `wiadomosc` (`id_wiadomosci`, `wiadomosc`, `data_`, `id_zgloszenia`) VALUES
(1, 'tst test nie pwoiem co nie wie t os? indormacje ', '0000-00-00', 2),
(2, 'tst test nie pwoiem co nie wie t os? indormacje ', '0000-00-00', 2);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `zgloszenie`
--

CREATE TABLE `zgloszenie` (
  `id_zgloszenia` int(11) NOT NULL,
  `tytul` varchar(500) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `kod` varchar(30) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `wiadomosc` varchar(1000) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `CzyOperator` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `zgloszenie`
--

INSERT INTO `zgloszenie` (`id_zgloszenia`, `tytul`, `kod`, `wiadomosc`, `status`, `CzyOperator`) VALUES
(1, 'tytuł', '1', 'tst test nie pwoiem co nie wie t os? indormacje ', '1', 1),
(2, 'tytuł', '2', 'tst test nie pwoiem co nie wie t os? indormacje ', 'title', 0);

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
  ADD PRIMARY KEY (`id_zgloszenia`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `wiadomosc`
--
ALTER TABLE `wiadomosc`
  MODIFY `id_wiadomosci` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `zgloszenie`
--
ALTER TABLE `zgloszenie`
  MODIFY `id_zgloszenia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
