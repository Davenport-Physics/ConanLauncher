
<script lang="ts">

    import { params, goto } from "@roxi/routify";
    import OrangeButton from "../../lib/_OrangeButton.svelte";
    import { get_character } from "../../lib/characters";
    import CharacterInformation from "./character_information.svelte";
    import CharacterSystemPrompt from "./character_system_prompt.svelte";

    let character_id: number = Number($params.character_id);
    let character = get_character(character_id)!;

    function on_back() {

        $goto("/characters");

    }



</script>

<div class="container z-10 absolute">
    <div class="h-2"></div>
    <div class="mx-2">
        <OrangeButton text={"Back"} on:click={on_back}/>
        <div class="h-2"></div>
        <div class="flex flex-col items-center gap-2">

            <input 
                placeholder="Character name" 
                class="rounded-md px-1 text-xl border-2 border-orange-800" 
                bind:value={character.name}/>

            <textarea 
                bind:value={character.description} 
                placeholder="Description" 
                class="min-h-32 w-96 px-2 outline-orange-800 rounded border-2 border-orange-800"/>

            <CharacterSystemPrompt {character_id} />
            <CharacterInformation {character_id} />

        </div>
    </div>
</div>