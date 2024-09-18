
/*
    User created characters
*/
CREATE TABLE IF NOT EXISTS Characters
(
    CharacterId INTEGER PRIMARY KEY,
    Name TEXT UNIQUE NOT NULL,
    Description TEXT,
    Image TEXT
);

/**
 * Information related to a character that will be submitted to an LLM as context for the roleplay you're engaging in.
 */
CREATE TABLE IF NOT EXISTS CharacterInformation
(
    CharacterInformationId INTEGER PRIMARY KEY,
    CharacterId INTEGER NOT NULL REFERENCES Characters(CharacterId),
    Title TEXT NOT NULL,
    Prompt TEXT NOT NULL,
    Active boolean NOT NULL DEFAULT(TRUE)
);

/*
    The system prompt, for how the LLM should write the character.
*/
CREATE TABLE IF NOT EXISTS CharacterSystemPrompts
(
    CharacterPromptId INTEGER PRIMARY KEY,
    CharacterId INTEGER UNIQUE NOT NULL REFERENCES Characters(CharacterId),
    Prompt TEXT NOT NULL
);

/*
    User created messages
*/
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