-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema coffee_shop
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema coffee_shop
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `coffee_shop` DEFAULT CHARACTER SET utf8 ;
USE `coffee_shop` ;

-- -----------------------------------------------------
-- Table `coffee_shop`.`Messages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coffee_shop`.`Messages` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `NameFrom` VARCHAR(45) NOT NULL,
  `EmailFrom` VARCHAR(45) NOT NULL,
  `Message` LONGTEXT NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `coffee_shop`.`Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coffee_shop`.`Products` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Title` VARCHAR(45) NOT NULL,
  `Description` TEXT NOT NULL,
  `PricePerKg` VARCHAR(45) NOT NULL,
  `ImageUrl` LONGTEXT NOT NULL,
  `Amount` INT NOT NULL,
  `TotalPrice` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `coffee_shop`.`CreditCard`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coffee_shop`.`CreditCard` (
  `CreditCardNumber` VARCHAR(100) NOT NULL,
  `NameAndSurname` VARCHAR(45) NOT NULL,
  `CVC2` VARCHAR(45) NOT NULL,
  `ValidUntil` VARCHAR(45) NOT NULL,
  `AccountState` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`CreditCardNumber`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
