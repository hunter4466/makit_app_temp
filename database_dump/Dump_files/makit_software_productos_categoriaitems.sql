-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: makit_software
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productos_categoriaitems`
--

DROP TABLE IF EXISTS `productos_categoriaitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos_categoriaitems` (
  `idproductos` int NOT NULL,
  `idcategoriaitems` int NOT NULL,
  `cantidad` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`idproductos`,`idcategoriaitems`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos_categoriaitems`
--

LOCK TABLES `productos_categoriaitems` WRITE;
/*!40000 ALTER TABLE `productos_categoriaitems` DISABLE KEYS */;
INSERT INTO `productos_categoriaitems` VALUES (1,1,'6'),(1,2,'0'),(1,3,'0'),(1,4,'0'),(1,5,'1'),(2,1,'4'),(2,2,'0'),(2,3,'0'),(2,4,'0'),(2,5,'1'),(3,1,'4'),(3,2,'0'),(3,3,'0'),(3,4,'0'),(3,5,'1'),(4,1,'8'),(4,2,'0'),(4,3,'0'),(4,4,'0'),(4,5,'2'),(5,1,'8'),(5,2,'0'),(5,3,'0'),(5,4,'8'),(5,5,'2'),(6,1,'4'),(6,2,'1'),(6,3,'0'),(6,4,'0'),(6,5,'1'),(7,1,'2'),(7,2,'1'),(7,3,'0'),(7,4,'0'),(7,5,'1'),(8,1,'0'),(8,2,'0'),(8,3,'0'),(8,4,'8'),(8,5,'0'),(9,1,'0'),(9,2,'0'),(9,3,'0'),(9,4,'4'),(9,5,'0'),(10,1,'0'),(10,2,'0'),(10,3,'0'),(10,4,'0'),(10,5,'1'),(11,1,'0'),(11,2,'0'),(11,3,'0'),(11,4,'0'),(11,5,'2'),(12,1,'0'),(12,2,'0'),(12,3,'0'),(12,4,'0'),(12,5,'3');
/*!40000 ALTER TABLE `productos_categoriaitems` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-09 22:33:31
