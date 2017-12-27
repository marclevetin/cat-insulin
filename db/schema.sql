CREATE DATABASE cat_insulin_db;
USE cat_insulin_db;

CREATE TABLE dosages
(
  id INTEGER NOT NULL AUTO_INCREMENT,
  dosage INTEGER NOT NULL,
  user_entered_date DATE NOT NULL,
  user_entered_time TIME NOT NULL,
  PRIMARY KEY (id)
);
