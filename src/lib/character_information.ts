
import { invoke } from "@tauri-apps/api";

export type CharacterInformation = {
    character_information_id?: number;
    character_id: number;
    title: string;
    prompt: string;
    active: boolean;
}

export async function get_all_character_information(characterId: number): Promise<CharacterInformation[]> {

    return await invoke("get_all_character_information", { characterId });

}

export async function add_character_information(characterInformation: CharacterInformation): Promise<void> {

    await invoke("add_character_information", { characterInformation });

}

export async function delete_character_information(characterInformation: CharacterInformation): Promise<void> {

    await invoke("delete_character_information", { characterInformation });

}

export async function update_character_information(characterInformation: CharacterInformation): Promise<void> {

    await invoke("update_character_information", { characterInformation });
    
}