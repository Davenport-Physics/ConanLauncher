
use serde::{Deserialize, Serialize};
use rusqlite::{params, OptionalExtension};

use crate::database;

#[derive(Serialize, Deserialize)]
pub struct CharacterSystemPrompt {
    pub character_id: i32,
    pub prompt: String
}

impl CharacterSystemPrompt {

    pub fn set(&self) {

        let conn = database::connection().unwrap();
        let QUERY: &str = 
        "
            INSER INTO CharacterSystemPrompts (CharacterId, Prompt)
            VALUES (?1, ?2)
            ON CONFLICT (CharacterId) DO UPDATE SET Prompt = ?2;
        ";

        conn.execute(QUERY, params![self.character_id, self.prompt]).unwrap();

    }

    pub fn get(character_id: i32) -> Option<CharacterSystemPrompt> {

        let conn = database::connection().unwrap();
        let QUERY: &str = 
        "
            SELECT 
                CharacterId, 
                Prompt
            FROM 
                CharacterSystemPrompts
            WHERE 
                CharacterId = ?1
        ";

        let result = conn.query_row(QUERY, params![character_id], |row| {

            Ok(CharacterSystemPrompt {
                character_id: row.get(0)?,
                prompt: row.get(1)?
            })

        }).optional();

        match result {
            Ok(prompt) => prompt,
            Err(_) => None
        }

    }

}

#[tauri::command]
pub fn set_character_system_prompt(character_system_prompt: CharacterSystemPrompt) {
    character_system_prompt.set();
}

#[tauri::command]
pub fn get_character_system_prompt(character_id: i32) -> Option<CharacterSystemPrompt> {
    CharacterSystemPrompt::get(character_id)
}