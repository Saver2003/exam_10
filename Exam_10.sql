CREATE DATABASE `week_news` DEFAULT CHARACTER SET utf8;
USE `week_news`;

CREATE TABLE `news` (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `content` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255),
    `date` DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `comments` (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `news_id` INT NOT NULL,
    `author` VARCHAR(255),
    `comment` VARCHAR(255) NOT NULL,
    INDEX FK_news_idx (`news_id`),
    FOREIGN KEY (`news_id`)
    REFERENCES news (`id`)
);

INSERT INTO `news` (`title`, `content`, `image`)
VALUES ('first news', 'some content', '');

INSERT INTO `comments` (`news_id`, `author`, `comment`)
VALUES (1, 'somebody', 'some comment');
