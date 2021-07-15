CREATE TABLE user(
    _IdUser INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    age INT(3),
    gender VARCHAR(255),
    picture TEXT,
    PRIMARY KEY (_IdUser)
); 

CREATE TABLE post  (
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
    favorite iNT(3) DEFAULT 0,
    PRIMARY KEY (_IdPost)
);

CREATE TABLE userLike(
    _IdLike INT AUTO_INCREMENT NOT NULL,
    userId INT,
    FOREIGN KEY (userId) REFERENCES user(_IdUser),
    postId INT,
    FOREIGN KEY (postId) REFERENCES post(_IdPost),
    PRIMARY KEY (_IdLike)
);

CREATE TABLE comments(
    _IdComment INT AUTO_INCREMENT NOT NULL,
    userId INT,
    postId INT,
    FOREIGN KEY (userId) REFERENCES user(_IdUser),
    FOREIGN KEY (postId) REFERENCES post(_IdPost),
    comment VARCHAR(255),
    date DATETIME,
    PRIMARY KEY (_IdComment)
);


CREATE TABLE conversation(
    _IdConversation INT AUTO_INCREMENT NOT NULL,
    senderId VARCHAR(255),
    receiverId VARCHAR(255),
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (_IdConversation)
);

CREATE TABLE messages(
    _IdMessage INT AUTO_INCREMENT NOT NULL,
    conversationId INT,
    userId INT,
    messageText TEXT,
    time TIMESTAMP ,
    FOREIGN KEY (userId) REFERENCES user(_IdUser),  
    FOREIGN KEY (conversationId) REFERENCES conversation(_IdConversation),
    PRIMARY KEY (_IdMessage)
);




