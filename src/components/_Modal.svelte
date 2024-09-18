
<script lang="ts">

    import { fly } from "svelte/transition";

    export let title: string = "";
    export let show_modal: boolean = false;

    function on_close() {
        show_modal = false;
    }

</script>

{#if show_modal}
    <div 
        class="modal w-1/2 min-h-96 z-20 fixed bg-white rounded-md border-2 border-orange-800" 
        transition:fly={{duration: 500, y: -500}}>

        <div class="flex flex-row justify-center">
            <h1 class="text-2xl">{title}</h1>
            <button 
                class="rounded-full text-xl absolute right-2 top-1 bg-red-800 text-white px-2 hover:bg-red-900"
                type="button" 
                on:click={on_close}>X</button>
        </div>
        <div class="h-1"></div>
        <slot></slot>
    </div>
{/if}

<style>
    .modal {
        position: fixed;
        left: calc(50%/2);
    }
</style>