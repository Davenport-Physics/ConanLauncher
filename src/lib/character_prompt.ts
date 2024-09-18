
import { invoke } from "@tauri-apps/api";

export type CharacterSystemPrompt = {
    character_id: number;
    prompt: string;
}

export async function set_character_system_prompt(characterSystemPrompt: CharacterSystemPrompt): Promise<void> {

    await invoke("set_character_system_prompt", { characterSystemPrompt });

}

export async function get_character_system_prompt(characterId: number): Promise<CharacterSystemPrompt | undefined> {

    return await invoke("get_character_system_prompt", { characterId });

}