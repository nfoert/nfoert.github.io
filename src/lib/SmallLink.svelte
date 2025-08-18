<script lang="ts">
    import { fade } from "svelte/transition";

    const { href, text, bold, icon } = $props();
</script>

{#if icon.startsWith("https://")}
    <!-- Create link with image icon -->
    <a {href} class="flex items-center grow-2 text-sm px-4 py-1 justify-center rounded-full hover:bg-slate-600/40 active:bg-slate-700/60 transition-all hover:scale-105 active:scale-95 text-center text-white font-mono">
        <img src={icon} alt={text} class="w-6 h-6 inline">
        <span class="ml-1">{text}</span>
        <span><strong>{bold}</strong></span>
    </a>
{:else}
    <!-- Create link with Phosphor icon -->
    <a {href} class="flex items-center grow-2 text-sm px-4 py-1 justify-center rounded-full hover:bg-slate-600/40 active:bg-slate-700/60 transition-all hover:scale-105 active:scale-95 text-center text-white font-mono">
        <i class={icon}></i>
        <span class="ml-1">{text}</span>
        <span><strong>{bold}</strong></span>
    </a>
{/if}