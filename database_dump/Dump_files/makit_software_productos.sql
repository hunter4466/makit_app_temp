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
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `idproductos` int NOT NULL AUTO_INCREMENT,
  `idcategoria` int DEFAULT NULL,
  `nombre` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `precio` decimal(9,2) DEFAULT NULL,
  `descripcion` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`idproductos`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,1,'Trío',41.00,'36 Makis (6 sabores) + 1 Bebida personal + 3 salsas + 2 ohashis'),(2,1,'Dúo',32.00,'24 Makis (4 sabores) + 1 Bebida personal + 3 salsas + 2 ohashis'),(3,1,'Dúo power',37.00,'24 Makis (4 sabores) + 4 gyosas + 1 Bebida personal + 3 salsas + 2 ohashis'),(4,1,'Doble dúo',62.00,'48 Makis (6 sabores) + 2 Bebidas personales + 3 salsas + 3 ohashis'),(5,1,'Entre Amigos',74.00,'36 Makis (6 sabores) + 1 Bebida personal + 3 salsas + 2 ohashis'),(6,1,'Makit 1',36.00,'36 Makis (6 sabores) + 1 Bebida personal + 3 salsas + 2 ohashis'),(7,1,'Makit 2',31.00,'36 Makis (6 sabores) + 1 Bebida personal + 3 salsas + 2 ohashis'),(8,4,'Gyosas x 8',16.00,'8 Gyosas de chancho + 1 salsa'),(9,4,'Gyosas x 4',16.00,'4 Gyosas de chancho + 1 salsa'),(10,5,'Bebida x 1',4.90,''),(11,5,'Bebida x 2',9.80,NULL),(12,5,'Bebida x 3',14.70,NULL);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-09 22:33:32
