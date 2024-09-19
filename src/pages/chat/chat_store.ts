

import { writable, get } from "svelte/store";
import { get_character } from "../../lib/characters";

export enum ChatStyle {
    ClassicalAntiquity = "Classical Antiquity",
    EarlyMedieval      = "Early Medieval",
    LateMedieval       = "Late Medieval",
    Renaissance        = "Renaissance",
    Enlightenment      = "Enlightenment",
    Romantic           = "Romantic",
    EarlyVictorian     = "Early Victorian",
    LateVictorian      = "Late Victorian",
    Modernist          = "Modernist",
    Postmodern         = "Postmodern",
    Contemporary       = "Contemporary",
}

export enum Verbosity {
    Concise = "Concise",
    Normal  = "Normal",
    Verbose = "Verbose",    
}

export enum ProseStyle {
    Plain = "Plain Prose",
    Descriptive = "Descriptive Prose",
    Purple = "Purple Prose",
    Technical = "Technical Prose",
    StreamOfConsciousness = "Stream of Consciousness",
}

export enum DialogueEra {
    OldEnglish           = "Old English",
    MiddleEnglish        = "Middle English",
    EarlyModernEnglish   = "Early Modern English",
    LateVictorianEnglish = "Late Victorian English",
    ModernEnglish        = "Modern English",
}

export const character_id = writable<number | undefined>(undefined);
export const chat_style   = writable<ChatStyle | undefined>(undefined);
export const verbosity    = writable<Verbosity | undefined>(undefined);
export const prose_style  = writable<ProseStyle | undefined>(undefined);
export const dialogue_era = writable<DialogueEra | undefined>(undefined);
export const text_chat_looping = writable(false);

// specifies what model to use for the chat
export const llm_generator     = writable<string | undefined>(undefined);

// Tells the chat to maintain a summary of the conversation. Should result in a reduced context size.
export const maintain_summary  = writable<boolean>(false);
export const summary_generator = writable<string | undefined>(undefined);


export function get_encapsulated_user_text(text: string): string {

    let character = get_character(get(character_id!)!);
    let message = `((Generate /me for ${character!.name} using the content below. Remember, you should be rewriting the content below and not responding to it.))\n\n`;
    
    message += text;
    message += get_end_generate_text();

    return message;

}

function get_end_generate_text(): string {

    let t_text = "\n\n((";
    if (get(chat_style) != undefined) {
        t_text += ` The writing style should mimic: ${get(chat_style)}.`;
    }

    if (get(verbosity) != undefined) {
        t_text += ` The /me should be ${get(verbosity)} in length.`;
    }

    if (get(prose_style) != undefined) {
        t_text += ` The generated prose style should be: ${get(prose_style)}.`;
    }

    if (get(dialogue_era) != undefined) {
        t_text += ` The dialogue in the /me, should inspired by the: ${get(dialogue_era)}, though still for modern ears. Rewrite the dialogue to better fit the era.`;
    }

    t_text += ` Do not assume details unless I explicitly provide you that information. Avoid making assumptions about relationships between characters or other unstated details.`;

    t_text += "))"
    return t_text;

}