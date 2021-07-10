CREATE TABLE user(
    _IdUser INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    username VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    age INT(3),
    gender VARCHAR(255),
    picture TEXT,
    PRIMARY KEY (_IdUser)
); 
CREATE TABLE Post  (
    _IdPost INT AUTO_INCREMENT NOT NULL,
    userId INT,
    FOREIGN KEY (userId) REFERENCES user(_IdUser),
    type VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    likes int (3),
    report int (3),
    url VARCHAR(255) NOT NULL, 
    archive iNT(3) DEFAULT 0,
    PRIMARY KEY (_IdPost)
);
CREATE TABLE userLike(
    _IdLike INT AUTO_INCREMENT NOT NULL,
    userId INT,
    FOREIGN KEY (userId) REFERENCES user(_IdUser),
    postId INT,
    FOREIGN KEY (postId) REFERENCES Post(_IdPost),
    PRIMARY KEY (_IdLike)
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
);





