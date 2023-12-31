
CREATE TABLE IF NOT EXISTS Characters
(
    CharacterId INTEGER PRIMARY KEY,
    Name TEXT UNIQUE NOT NULL,
    Description TEXT,
    Image TEXT
);

CREATE TABLE IF NOT EXISTS CharacterMessages
(
    CharacterMessageId INTEGER PRIMARY KEY,
    CreateTime TIMESTAMP NOT NULL DEFAULT(CURRENT_TIMESTAMP),
    CharacterId INTEGER NOT NULL REFERENCES Characters(CharacterId),
    Message TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS MessageSenders
(
	MessageSenderId INTEGER PRIMARY KEY,
	SeenTime TIMESTAMP NOT NULL DEFAULT(CURRENT_TIMESTAMP),
	Sender TEXT UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS Messages
(
    MessageId INTEGER PRIMARY KEY,
    CreateTime TIMESTAMP NOT NULL DEFAULT(CURRENT_TIMESTAMP),
    MessageSenderId INTEGER NOT NULL REFERENCES MessageSenders(MessageSenderId),
    Message TEXT NOT NULL
);