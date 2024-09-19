
<script lang="ts">

    import Modal from "../../components/_Modal.svelte";
    import OrangeButton from "../../lib/_OrangeButton.svelte";
    import { get_encapsulated_user_text, llm_generator, summary_generator } from "./chat_store";
    import { get_character_system_prompt, type CharacterSystemPrompt } from "../../lib/character_prompt";
    import { get_all_character_information } from "../../lib/character_information";
    import { character_id } from "./chat_store";
    import { type CharacterInformation } from "../../lib/character_information";
    import { open_router_generate } from "../../lib/openrouter";
    import { messages } from "../../lib/network";
    import type { Message } from "../../lib/openrouter/request";
    import { Ok, type Result } from "../../lib/result";

    export let show_llm_modal: boolean;
    export let text: string;

    let char_info: CharacterInformation[] = [];
    let system_prompt: CharacterSystemPrompt | undefined = undefined;
    
    let summary: string = "";
    let generated_text  = "";

    $: if ($character_id != undefined) {
        init()
    }

    $: if (show_llm_modal) {
        generated_text = "";
    }

    async function init() {

        if ($character_id == undefined) {
            return;
        }

        char_info     = await get_all_character_information($character_id);
        system_prompt = await get_character_system_prompt($character_id);
        summary       = "";

    }

    function get_combined_messages(): string {

        if ($messages.length == 0) {
            return "";
        }

        return "((Messages from other characters))\n" + $messages.map((m) => `${m.sender}: ${m.message}`).join("\n") + "\n((End of messages))\n";

    }

    function get_current_summary(): string {

        if (summary.length == 0) {
            return "";
        }

        return `((CURRENT SUMMARY))\n ${summary} \n((END OF CURRENT SUMMARY))\n`

    }

    async function generate_summary(): Promise<Result<string | undefined, string>> {

        let recent_messages = get_combined_messages();

        if (recent_messages.length == 0) {
            return Ok(undefined);
        }

        let or_messages: Message[] = [];
        if (summary.length > 0) {

            or_messages.push({
                role: "user",
                content: get_current_summary()
            })

        }

        or_messages.push({
            role: "user",
            content: recent_messages
        });

        or_messages.push({
            role: "user",
            content: `((SYSTEM PROMPT))\n Generate a summary of what other characters have done and said. Modify the existing summary to include this information. \n((END OF SYSTEM PROMPT))`
        })

        return await open_router_generate($summary_generator!, or_messages);

    }

    async function on_generate() {

        let or_messages: Message[] = [];

        // Add character information to the top of the message
        char_info.forEach((ci) => {
            or_messages.push({
                role: "user",
                content: `# ${ci.title}\n${ci.prompt}\n`
            });
        })

        // If the summary generator is selected, generate the summary, otherwise, just combine the messages
        if ($summary_generator != undefined) {

            let s_result = await generate_summary();

            if (s_result.is_ok()) {

                if (s_result.unwrap() != undefined) {
                    summary = s_result.unwrap()!;
                }

            } else {

                alert(s_result.unwrap_error());
                return;

            }

            if (summary.length > 0) {

                or_messages.push({
                    role: "user",
                    content: get_current_summary()
                });

            }


        } else {

            or_messages.push({
                role: "user",
                content: get_combined_messages()
            });

        }

        if (system_prompt != undefined) {

            or_messages.push({
                role: "user",
                content: system_prompt.prompt
            });

        }

        or_messages.push({
            role: "user",
            content: get_encapsulated_user_text(text)
        });

        let result = await open_router_generate($llm_generator!, or_messages);

        if (result.is_ok()) {
            generated_text = result.unwrap();
        } else {
            alert(result.unwrap_error());
        }

    }

    function on_accept() {
            
        if (generated_text.length == 0) {
            return;
        }

        text = generated_text;
        show_llm_modal = false;

    }

</script>

<Modal title="Generate" bind:show_modal={show_llm_modal}>
    <div class="flex flex-col gap-1">

        <div class="bg-white border-2 border-orange-800 mx-2 min-h-96 rounded-md">
            {#if generated_text.length == 0}
                <p>Click generate</p>
            {:else}
                {generated_text}
            {/if}
        </div>

        <div class="flex flex-row justify-center gap-2">
            <OrangeButton on:click={on_accept} text="Accept"/>
            <OrangeButton on:click={on_generate} text="Generate"/>
        </div>
        <div class="h-6"></div>

    </div>
</Modal>