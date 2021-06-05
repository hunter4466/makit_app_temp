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
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `idadmins` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) COLLATE latin1_bin DEFAULT NULL,
  `nivel_privilegio` int DEFAULT NULL,
  `user` varchar(45) COLLATE latin1_bin DEFAULT NULL,
  `pass` varchar(45) COLLATE latin1_bin DEFAULT NULL,
  PRIMARY KEY (`idadmins`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'Mario Chois',5,'hunter4466','jf7l2p93li');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoriaitems`
--

DROP TABLE IF EXISTS `categoriaitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoriaitems` (
  `idcategoriaitems` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`idcategoriaitems`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoriaitems`
--

LOCK TABLES `categoriaitems` WRITE;
/*!40000 ALTER TABLE `categoriaitems` DISABLE KEYS */;
INSERT INTO `categoriaitems` VALUES (1,'makis'),(2,'gohanrolls'),(3,'alitas'),(4,'gyosas'),(5,'bebidas');
/*!40000 ALTER TABLE `categoriaitems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoriaproductos`
--

DROP TABLE IF EXISTS `categoriaproductos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoriaproductos` (
  `idcategorias` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`idcategorias`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoriaproductos`
--

LOCK TABLES `categoriaproductos` WRITE;
/*!40000 ALTER TABLE `categoriaproductos` DISABLE KEYS */;
INSERT INTO `categoriaproductos` VALUES (1,'Combos'),(2,'Tablas solas'),(3,'Adicionales'),(4,'Complementos'),(5,'Bebidas');
/*!40000 ALTER TABLE `categoriaproductos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `idclientes` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `apellido` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `cumpledia` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `cumplemes` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `cumpleano` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `sexo` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `telefono` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `contrasena` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`idclientes`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Mario','Chois',NULL,NULL,NULL,NULL,'M','993962231','jf7l2p93li'),(2,'Alejandra','Vargas',NULL,NULL,NULL,NULL,'F','999933368','claveale');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direcciones`
--

DROP TABLE IF EXISTS `direcciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direcciones` (
  `iddirecciones` int NOT NULL AUTO_INCREMENT,
  `idclientes` int DEFAULT NULL,
  `direccion` varchar(225) COLLATE latin1_bin DEFAULT NULL,
  `referencia` varchar(225) COLLATE latin1_bin DEFAULT NULL,
  PRIMARY KEY (`iddirecciones`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direcciones`
--

LOCK TABLES `direcciones` WRITE;
/*!40000 ALTER TABLE `direcciones` DISABLE KEYS */;
INSERT INTO `direcciones` VALUES (1,1,'Jr Jose Antonio 270 block 1 dpto 203','Frente al colegio Abraham Lincoln');
/*!40000 ALTER TABLE `direcciones` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Table structure for table `medios_de_pago`
--

DROP TABLE IF EXISTS `medios_de_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medios_de_pago` (
  `Nombre` int NOT NULL,
  `Discount_index` double NOT NULL,
  PRIMARY KEY (`Nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medios_de_pago`
--

LOCK TABLES `medios_de_pago` WRITE;
/*!40000 ALTER TABLE `medios_de_pago` DISABLE KEYS */;
/*!40000 ALTER TABLE `medios_de_pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordenes`
--

DROP TABLE IF EXISTS `ordenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordenes` (
  `idordenes` int NOT NULL AUTO_INCREMENT,
  `idclientes` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `iddireccion` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `iddetalle` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `fecha_registro` date DEFAULT NULL,
  `hora registro` datetime DEFAULT NULL,
  `fecha_orden` date DEFAULT NULL,
  `hora_registro` datetime DEFAULT NULL,
  `valor_producto` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `valor_delivery` decimal(10,2) DEFAULT NULL,
  `monto_total_venta` decimal(10,2) DEFAULT NULL,
  `tipo_de_pago` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `dscuentos_tarjeta` decimal(10,2) DEFAULT NULL,
  `descuentos_pagolink` decimal(10,2) DEFAULT NULL,
  `descuentos_aplicativo` decimal(10,2) DEFAULT NULL,
  `descuentos_tienda` decimal(10,2) DEFAULT NULL,
  `tipo_de_pedido` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ingreso_total` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`idordenes`),
  UNIQUE KEY `iddetalle_UNIQUE` (`iddetalle`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordenes`
--

LOCK TABLES `ordenes` WRITE;
/*!40000 ALTER TABLE `ordenes` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordenes` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2021-05-09 22:32:23
