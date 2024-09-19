
import { invoke } from "@tauri-apps/api";
import { type Message } from "./openrouter/request";
import type { NonStreamingChoice, OpenRouterResponse } from "./openrouter/response";
import { Result, Ok, Err } from "./result";

export const OPEN_ROUTER_MODELS = [
    "google/gemini-pro-1.5",
    "google/gemini-flash-1.5",
    "nousresearch/hermes-3-llama-3.1-405b",
    "meta-llama/llama-3.1-70b-instruct"
]

const OPEN_ROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
var API_TOKEN: string | undefined = undefined;

export async function open_router_generate(model: string, messages: Message[]): Promise<Result<string, string>> {

    if (API_TOKEN == undefined) {
        return Err("API Token not initialized");
    }

    let response: Response | undefined = undefined;
    try {

        response = await fetch(OPEN_ROUTER_URL, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${API_TOKEN}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model,
                messages
            })
        })

    } catch (e) {

        return Err("Failed to fetch from OpenRouter: " + e);

    }

    if (response.status != 200) {
        return Err("Failed to fetch from OpenRouter: " + response.statusText);
    }

    let o_response: OpenRouterResponse = await response.json();
    let choice = o_response.choices[0] as NonStreamingChoice;

    if (choice.message.content == null) {
        return Err("No content returned");
    }

    return Ok(choice.message.content);

}

export async function init_api_token() {

    let token: string | undefined = await invoke("get_open_router_api_key");

    if (token != null) {
        API_TOKEN = token;
    }

}