
<script lang="ts">

    import OrangeButton from "../../lib/_OrangeButton.svelte";
    import { 
    add_character_information,
        delete_character_information,
        get_all_character_information, 
        update_character_information, 
        type CharacterInformation 
    } from "../../lib/character_information";
    import Modal from "../../components/_Modal.svelte";

    export let character_id: number;

    let char_info: CharacterInformation[] = [];
    let show_modal: boolean = false;

    let working_title: string = "";
    let working_info: string  = "";
    let character_information_id: number | undefined = undefined;

    async function init() {

        char_info = await get_all_character_information(character_id);

    }

    function add_new() {

        working_title = "";
        working_info = "";
        character_information_id = undefined;

        show_modal = true;

    }

    function edit(info: CharacterInformation) {

        working_title = info.title;
        working_info = info.prompt;
        character_information_id = info.character_information_id;

        show_modal = true;

    }

    async function on_save() {

        if (character_information_id == undefined) {

            await add_character_information({
                character_id,
                title: working_title,
                prompt: working_info,
                active: true
            });

        } else {

            update_character_information({
                character_information_id,
                character_id,
                title: working_title,
                prompt: working_info,
                active: true
            });

        }

        // Reset the working variables. More performant to not do this, but it's easier to manage.
        init();
        show_modal = false;

    }

    async function on_delete(info: CharacterInformation) {

        await delete_character_information(info);
        init();

    }

    init();

</script>

<details>

    <summary class="bg-white text-2xl px-2 rounded-md select-none border-2 border-orange-800">Character Information</summary>
    <div class="h-1"></div>

    <div class="flex flex-col gap-2">
        {#each char_info as info}
            <div class="flex flex-row gap-2 justify-center">
                <button
                    class="rounded-md border-2 border-orange-800 text-2xl bg-white px-2"
                    on:click={() => {edit(info)}}>{info.title}</button>
                <button 
                    class="rounded-full px-2 text-2xl bg-red-800 text-white hover:bg-red-900" 
                    on:click={() => {on_delete(info);}}>X</button>
            </div>
        {/each}
    </div>

    <div class="h-1"></div>
    <div class="flex flex-row justify-center">
        <OrangeButton text="Add" on:click={add_new}/>
    </div>

</details>

<Modal bind:show_modal>
    <div class="flex flex-col gap-2 px-2">
        <input 
            placeholder="Title" 
            class="rounded-md px-1 text-xl border-2 border-orange-800" 
            bind:value={working_title}/>
        <textarea 
            bind:value={working_info} 
            class="border-2 border-orange-800 rounded-md min-h-60 px-1" 
            placeholder="Character information"/>
        <div class="flex flex-col items-center">
            <OrangeButton text="Save" on:click={on_save}/>
        </div>
    </div>
</Modal>