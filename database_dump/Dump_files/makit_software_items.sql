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
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `iditems` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `state` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `descripcion` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `idcategoriaitems` int DEFAULT NULL,
  `codename` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`iditems`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,'Fritas','active','Empanadas japonesas fritas, rellenas de chancho estilo oriental.',4,'gyosas_fritas'),(2,'Al Vapor','active','Empanadas japonesas cocidas al vapor, rellenas de chancho estilo oriental.',4,'gyosas_al_vapor'),(3,'Coca Cola','active','Coca Cola regular de tamaño personal.',5,'coca_cola'),(4,'Coca Cola Zero','active','Coca Cola sin azúcar de tamaño personal.',5,'coca_cola_zero'),(5,'Inca Kola','active','Inca Kola regular de tamaño personal.',5,'inca_kola'),(6,'Inca Kola Zero','active','Inca Kola sin azúcar de tamaño personal.',5,'inca_kola_zero'),(7,'Fanta','active','Fanta reducida en azúcar de tamaño personal.',5,'fanta'),(8,'Sprite','active','Sprite sin azúcar de tamaño personal.',5,'sprite'),(9,'Agua San Luis sin gas','active','Agua de mesa tradicional de tamaño personal.',5,'agua_san_luis_sin_gas'),(10,'Agua San Luis con gas','active','Agua de mesa con gas de tamaño personal.',5,'gua_san_luis_con_gas'),(11,'Acevichado','active','Rollo de arroz con alga por fuera y topping de salsa acevichada y chips de camote.',2,'gohanroll_acevichado'),(12,'Makit','active','Rollo de arroz con alga por fuera y topping de salsa Makit y chips de camote.',2,'gohanrolli_makit'),(13,'Mexican','active','Rollo de arroz con alga por fuera y topping de salsa Mexican y chips de camote.',2,'gohanrolli_mexican'),(14,'Tiradito','active','Rollo de arroz con alga por fuera y topping de salsa Mexican y chips de camote.',2,'gohanrolli_tiradito'),(15,'Olivo','active','Rollo de arroz con alga por fuera y topping de salsa Olivo y chips de camote.',2,'gohanrolli_olivo'),(16,'Bbq','active','Rollo de arroz con alga por fuera y topping de salsa Bbq y chips de camote.',2,'gohanrolli_bbq'),(17,'Passion','active','Rollo de arroz con alga por fuera y topping de salsa de maracuyá y chips de camote.',2,'gohanroll_passion'),(18,'Acevichado','active','Relleno de langostino al panko, palta y queso crema cubierto con atún rojo y salsa Acevichada.',1,'maki_acevichado'),(19,'Furai','active','Crispy, relleno de salmón fresquito, queso crema derretido y palta; con un toque de salsa dulce hecha en casa.',1,'maki_furai'),(20,'Tiradito','active','Langostino, palta y queso crema; salsa de ají amarillo con todo el sabor peruano; coronado con camotito crocante.',1,'maki_tiradito'),(21,'Makit','active','El icónico, salsa acevichada de rocoto ahumada con relleno de langostinos crispy y su paltita más.',1,'maki_makit'),(22,'California','active','Clásico con langostino al panko, pepino y queso crema; cubierto con ajonjolí.',1,'maki_california'),(23,'Mexican','active','Zarcita de tomate con cebolla, palta y queso crema, cubierto con atún rojo y salsa de jalapeño.',1,'maki_mexican'),(24,'Che Maki','active','Crocante, relleno de carne marinada; cubierto con salsa dulce y un chimichurri que... ¡te mueres!.',1,'maki_che_maki'),(25,'Candy Roll','active','Langostino crocante, palta cremosita y queso crema. Cubierto con salmón ahumadito y salsa dulce.',1,'maki_candy_roll'),(26,'Crispy Acevichado','active','Langostino, queso crema y palta con crujiente capa de panko y salsa acevichada',1,'maki_crispy_acevichado'),(27,'Olivo','active','Langostino, palta y queso crema; cubierto con polvo de galleta, salsa de aceituna y un toque de aceite de oliva',1,'maki_olivo'),(28,'Bbq','active','Langostino, palta y queso crema; cubierto con pescado fresco y salsa agridulce ahumada.',1,'maki_bbq'),(29,'Passion','active','Langostino, palta y queso crema; cubierto con pescado blanco y miel de maracuya y ají amarillo sin picante.',1,'maki_passion'),(30,'Lomo Saltado','active','Langostino, palta y queso crema; cubierto con lomo saltado y papitas al hilo.',1,'maki_lomo_saltado'),(31,'Bbq','active','Con salsa agridulce ahumada.',3,'alitas_bbq'),(32,'Bbq spicy','active','Con salsa agridulce ahumada picante.',3,'alitas_bbq_spicy'),(33,'Buffalo','active','Salsa agria estilo americana picante.',3,'alitas_buffalo'),(34,'Passion Honey','active','Salsa de maracuyá con ají amarillo (sin picante)',3,'alitas_passion_honey');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
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
