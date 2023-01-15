DROP DATABASE IF EXISTS CubeTracker;

CREATE DATABASE CubeTracker;

USE CubeTracker;

CREATE TABLE user (
  id char(15) NOT NULL,
  name char(100) NOT NULL DEFAULT 'User',
  username char(100) NOT NULL DEFAULT 'username',
  password char(100) NOT NULL DEFAULT 'password',
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE image (
  id char(17) NOT NULL,
  content varchar(54) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE tag (
  id char(15) NOT NULL,
  name char(50) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE algorithm (
  id char(17) NOT NULL,
  userId char(15) NOT NULL,
  imageId char(17) NOT NULL,
  content varchar(100) NOT NULL,
  votes smallint(5) unsigned NOT NULL DEFAULT 1,
  note varchar(1000) DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT algorithm_ibfk_1 FOREIGN KEY (userId) REFERENCES user (id),
  CONSTRAINT algorithm_ibfk_2 FOREIGN KEY (imageId) REFERENCES image (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE algorithmrecord (
  id char(17) NOT NULL,
  userId char(15) NOT NULL,
  algorithmId char(17) NOT NULL,
  time time(2) NOT NULL,
  KEY id (id),
  KEY userId (userId),
  KEY algorithmId (algorithmId),
  CONSTRAINT record_ibfk_1 FOREIGN KEY (algorithmId) REFERENCES algorithm (id),
  CONSTRAINT record_ibfk_2 FOREIGN KEY (userId) REFERENCES user (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE algorithmstate (
  id char(16) NOT NULL,
  userId char(15) NOT NULL,
  algorithmId char(17) NOT NULL,
  state enum('not learn','learning','learned') NOT NULL,
  isFavorite enum('unknown','yes','no') NOT NULL,
  dateChange datetime NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT algorithmstate_ibfk_1 FOREIGN KEY (algorithmId) REFERENCES algorithm (id),
  CONSTRAINT algorithmstate_ibfk_2 FOREIGN KEY (userId) REFERENCES user (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE algorithmtag (
  id char(16) NOT NULL,
  algorithmId char(17) NOT NULL,
  tagId char(15) NOT NULL,
  PRIMARY KEY (id),
  KEY algorithmId (algorithmId),
  KEY tagId (tagId),
  CONSTRAINT algorithmtag_ibfk_1 FOREIGN KEY (algorithmId) REFERENCES algorithm (id),
  CONSTRAINT algorithmtag_ibfk_2 FOREIGN KEY (tagId) REFERENCES tag (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;