USE MERAKI_Academy_Project_5;
CREATE TABLE user(
    _IdUser INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    age INT(3),
    gender VARCHAR(255),
    PRIMARY KEY (_IdUser)
);
CREATE TABLE Post  (
    _IdPost INT AUTO_INCREMENT NOT NULL,
    userId INT,
    FOREIGN KEY (userId) REFERENCES user(_IdUser),
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    likes int (3),
   report int (3),
    video_url VARCHAR(255) NOT NULL,
    Archive iNT(3) DEFAULT 0,
    PRIMARY KEY (_IdPost)
);
CREATE TABLE favorite  (
    _IdFavorite INT AUTO_INCREMENT NOT NULL,
    userId INT,
    postId INT,
    FOREIGN KEY (userId) REFERENCES user(_IdUser),
    FOREIGN KEY (postId) REFERENCES Post(_IdPost),
    PRIMARY KEY (_IdFavorite )
);
CREATE TABLE comments(
    _IdComment INT AUTO_INCREMENT NOT NULL,
    userId INT,
    postId INT,
    FOREIGN KEY (userId) REFERENCES user(_IdUser),
    FOREIGN KEY (postId) REFERENCES Post(_IdPost),
    comment VARCHAR(255),
    date DATETIME,
    PRIMARY KEY (_IdComment)
<<<<<<< HEAD
);
=======
);
>>>>>>> 5245afe8779164f7a0cc78b76f69f41ea1bd2dec
