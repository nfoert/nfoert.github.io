<script lang="ts">
    const { href, text, bold, icon } = $props();
</script>

{#if icon.startsWith("https://") || icon.startsWith("http://") || icon.startsWith("/")}
    <!-- Create link with image icon -->
    <a {href} class="flex items-center md:items-left text-md px-6 py-2 rounded-full hover:bg-slate-600/40 active:bg-slate-700/60 transition-all hover:scale-105 active:scale-95 text-center md:text-left text-white">
        <img src={icon} alt={text} class="w-6 h-6 inline">
        <span class="ml-1">{text}</span>
        <span><strong>{bold}</strong></span>
    </a>
{:else}
    <!-- Create link with Phosphor icon -->
    <a {href} class="flex items-center md:items-left text-md px-6 py-2 rounded-full hover:bg-slate-600/40 active:bg-slate-700/60 transition-all hover:scale-105 active:scale-95 text-center md:text-left text-white">
        <i class={icon}></i>
        <span class="ml-1">{text}</span>
        <span><strong>{bold}</strong></span>
    </a>
{/if}