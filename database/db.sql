CREATE DATABASE myfavoritevideo;

use myfavoritevideo;


CREATE TABLE addvideo (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(50) NOT NULL,
  Description VARCHAR(100) NOT NULL,
  Category VARCHAR(15),
  date ATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP 
);



describe addvideo;
show tables;