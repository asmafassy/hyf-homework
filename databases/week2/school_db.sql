
--Part 2: School database
CREATE DATABASE school
    DEFAULT CHARACTER SET = 'utf8mb4';

USE school;
CREATE TABLE `class`(
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255) NOT NULL,
    `begins` DATETIME NOT NULL,
    `ends` DATETIME NULL DEFAULT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    --Add a new column to the class table named status
    ALTER TABLE `class`
    ADD COLUMN `status` ENUM('not-started', 'ongoing', 'finished');

CREATE TABLE `student`(
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255) NOT NULL,
`email` varchar(255) NOT NULL,
`phone`  varchar(255) NULL,
`class_id` int(10) unsigned NOT NULL,
 FOREIGN KEY (`class_id`) REFERENCES `class`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;