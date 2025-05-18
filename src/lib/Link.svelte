<script lang="ts">
    const { href, text, icon } = $props();
</script>

{#if icon.startsWith("https://")}
    <!-- Create link with image icon -->
    <a {href} class="flex gap-1 items-center text-md px-6 py-2 rounded-full hover:bg-slate-600/40 active:bg-slate-700/60 transition-all hover:scale-105 active:scale-95 text-center md:text-left">
        <img src={icon} alt={text} class="w-6 h-6 inline">
        <span>{text}</span>
    </a>
{:else}
    <!-- Create link with Phosphor icon -->
    <a {href} class="flex gap-1 items-center text-md px-6 py-2 rounded-full hover:bg-slate-600/40 active:bg-slate-700/60 transition-all hover:scale-105 active:scale-95 text-center md:text-left">
        <i class={icon}></i>
        <span>{text}</span>
    </a>
{/if}