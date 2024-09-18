
use serde::{Deserialize, Serialize};
use rusqlite::params;

use crate::database::{self, connection};

#[derive(Serialize, Deserialize)]
pub struct CharacterInformation {
    pub character_information_id: Option<i32>,
    pub character_id: i32,
    pub title: String,
    pub prompt: String,
    pub active: bool
}

impl CharacterInformation {

    pub fn add(&self) -> i32 {

        let conn = database::connection().unwrap();
        const QUERY: &str = 
        "
            INSERT INTO 
                CharacterInformation (CharacterId, Title, Prompt, Active)
            VALUES 
                (?1, ?2, ?3, ?4)
            RETURNING 
                CharacterInformationId
        ";

        conn.query_row(QUERY, params![self.character_id, self.title, self.prompt, self.active], |row| {
            Ok(row.get(0).unwrap())
        }).unwrap()

    }

    pub fn update(&self) -> Result<(), &'static str> {

        if self.character_information_id.is_none() {
            return Err("character_information_id is required to update a character information.");
        }

        let conn = connection().unwrap();
        const QUERY: &str =
        "
            UPDATE
                CharacterInformation
            SET
                Title = ?1,
                Prompt = ?2,
                Active = ?3
            WHERE
                CharacterInformationId = ?4;
        ";

        conn
            .execute(QUERY, params![self.title, self.prompt, self.active, self.character_information_id.unwrap()])
            .unwrap();

        Ok(())

    }

    pub fn delete(&self) -> Result<(), &'static str> {

        if self.character_information_id.is_none() {
            return Err("character_information_id is required to delete a character information.");
        }

        let conn = connection().unwrap();
        const QUERY: &str = 
        "
            DELETE FROM 
                CharacterInformation
            WHERE 
                CharacterInformationId = ?1
        ";

        conn.execute(QUERY, params![self.character_information_id.unwrap()]).unwrap();
        Ok(())

    }

    pub fn get_all(character_id: i32) -> Vec<CharacterInformation> {

        const QUERY: &str = 
        "
            SELECT
                CharacterInformationId,
                CharacterId,
                Title,
                Prompt,
                Active
            FROM
                CharacterInformation
            WHERE
                CharacterId = ?1
            ORDER BY 
                CharacterInformationId ASC
        ";

        let conn = connection().unwrap();
        let mut statement = conn.prepare(QUERY).unwrap();

        let results = statement.query_map(params![character_id], |row| {

            Ok(CharacterInformation {
                character_information_id: Some(row.get(0).unwrap()),
                character_id: row.get(1).unwrap(),
                title: row.get(2).unwrap(),
                prompt: row.get(3).unwrap(),
                active: row.get(4).unwrap()
            })

        });

        if let Ok(results) = results {
            return results.into_iter().map(|r| r.unwrap()).collect();
        }

        Vec::new()

    }


}

#[tauri::command]
pub fn get_all_character_information(character_id: i32) -> Vec<CharacterInformation> {
    CharacterInformation::get_all(character_id)
}

#[tauri::command]
pub fn add_character_information(character_information: CharacterInformation) -> i32 {
    character_information.add()
}

#[tauri::command]
pub fn delete_character_information(character_information: CharacterInformation) -> Result<(), &'static str> {
    character_information.delete()
}

#[tauri::command]
pub fn update_character_information(character_information: CharacterInformation) -> Result<(), &'static str> {
    character_information.update()
}