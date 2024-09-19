
use serde::{Serialize, Deserialize};
use toml;

#[derive(Serialize, Deserialize)]
pub struct OpenRouterSettings {
    pub api_key: String,
}

impl OpenRouterSettings {

    pub fn from_file() -> Option<OpenRouterSettings> {

        let file = std::fs::read_to_string("open_router.toml");

        match file {
            Ok(file) => {
                let settings: OpenRouterSettings = toml::from_str(&file).unwrap();
                Some(settings)
            },
            Err(_) => None
        }

    }

}

#[tauri::command]
pub fn get_open_router_api_key() -> Option<String> {

    let setting = OpenRouterSettings::from_file();

    match setting {
        Some(setting) => Some(setting.api_key),
        None => None
    }

}