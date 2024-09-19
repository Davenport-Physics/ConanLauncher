
<script lang="ts">

    import { llm_generator, summary_generator } from "./chat_store";
    import { OPEN_ROUTER_MODELS } from "../../lib/openrouter";

</script>

<div class="flex flex-col gap-2">

    <label 
        class="text-center text-white text-xl bg-amber-900 rounded-xl" 
        for="character_select">LLM Generator</label>

    <select 
        bind:value={$llm_generator} 
        class="pl-3 pr-6 text-base border-amber-900 border-4 placeholder-gray-600 rounded-lg appearance-none focus:shadow-outline">

        <option disabled selected value="">Select Model</option>
        {#each OPEN_ROUTER_MODELS as option}
            <option value={option}>{option}</option>
        {/each}

    </select>

    <label 
        class="text-center text-white text-xl bg-amber-900 rounded-xl" 
        for="character_select">Summary Generator</label>

    <select 
        bind:value={$summary_generator} 
        class="pl-3 pr-6 text-base border-amber-900 border-4 placeholder-gray-600 rounded-lg appearance-none focus:shadow-outline">

        <option disabled selected value="">Select Model</option>
        {#each OPEN_ROUTER_MODELS as option}
            <option value={option}>{option}</option>
        {/each}

    </select>

</div>