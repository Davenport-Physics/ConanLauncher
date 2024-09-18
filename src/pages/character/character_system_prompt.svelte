
<script lang="ts">

    import OrangeButton from "../../lib/_OrangeButton.svelte";
    import { 
        set_character_system_prompt, 
        get_character_system_prompt,
        type CharacterSystemPrompt
    } from "../../lib/character_prompt";

    import Modal from "../../components/_Modal.svelte";

    export let character_id: number;

    let character_system_prompt: CharacterSystemPrompt | undefined = undefined;
    let show_modal: boolean = false;
    let prompt: string = "";

    async function init() {

        character_system_prompt = await get_character_system_prompt(character_id);

        if (character_system_prompt) {
            prompt = character_system_prompt.prompt;
        }

    }

    function on_click() {
        show_modal = true;
    }

    async function on_save() {

        let new_prompt: CharacterSystemPrompt = {
            character_id: character_id,
            prompt: prompt
        };

        set_character_system_prompt(new_prompt);

    }

    init();

</script>

<OrangeButton text="Set System Prompt" on:click={on_click}/>
<Modal bind:show_modal title="Set System Prompt">
    <div class="flex flex-col gap-2 px-2">
        <textarea 
            bind:value={prompt} 
            class="border-2 border-orange-800 rounded-md min-h-60 px-1" 
            placeholder="System prompt"/>
        <div class="flex flex-col items-center">
            <OrangeButton text="Save" on:click={on_save}/>
        </div>
    </div>
</Modal>