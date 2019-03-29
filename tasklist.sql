-- MySQL Script generated by MySQL Workbench
-- Fri Mar 29 02:20:41 2019
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema TaskList
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `list`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `list` ;

CREATE TABLE IF NOT EXISTS `list` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(245) NOT NULL COMMENT 'Titulo da tarefa',
  `created` DATETIME NOT NULL DEFAULT now(),
  `modified` DATETIME NOT NULL DEFAULT now(),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `task` ;

CREATE TABLE IF NOT EXISTS `task` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `list_id` INT UNSIGNED NOT NULL COMMENT 'id relacionado a list',
  `completed` TINYINT NOT NULL DEFAULT 0 COMMENT 'se a tarefa foi completada ou não',
  `task` MEDIUMTEXT NOT NULL COMMENT 'Descrição da tarefa',
  `created` DATETIME NOT NULL DEFAULT now() COMMENT 'data de criação',
  `modified` DATETIME NOT NULL DEFAULT now() COMMENT 'data de edição',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_table1_list_idx` (`list_id` ASC),
  CONSTRAINT `fk_table1_list`
    FOREIGN KEY (`list_id`)
    REFERENCES `list` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


DELIMITER $$

DROP TRIGGER IF EXISTS `list_BEFORE_UPDATE` $$
CREATE DEFINER = CURRENT_USER TRIGGER `TaskList`.`list_BEFORE_UPDATE` BEFORE UPDATE ON `list` FOR EACH ROW
BEGIN
	set NEW.modified = now();
END$$


DROP TRIGGER IF EXISTS `task_BEFORE_UPDATE_WRONG_SCHEMA` $$
CREATE DEFINER = CURRENT_USER TRIGGER `TaskList`.`task_BEFORE_UPDATE` BEFORE UPDATE ON `task` FOR EACH ROW
BEGIN
	set NEW.modified = now();
END$$


DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `list`
-- -----------------------------------------------------
START TRANSACTION;
INSERT INTO `list` (`id`, `title`, `created`, `modified`) VALUES (1, 'Tarefa de exemplo', DEFAULT, DEFAULT);

COMMIT;


-- -----------------------------------------------------
-- Data for table `task`
-- -----------------------------------------------------
START TRANSACTION;
INSERT INTO `task` (`id`, `list_id`, `completed`, `task`, `created`, `modified`) VALUES (DEFAULT, 1, 0, 'Task de exemplo', DEFAULT, DEFAULT);

COMMIT;

