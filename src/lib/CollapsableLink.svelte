<script lang="ts">
    import autoAnimate from '@formkit/auto-animate';
    import { slide, fade } from 'svelte/transition';

    import SmallLink from './SmallLink.svelte';

    // buttons : [{text: string, href: string, icon: string}, {text: string, href: string, icon: string}, ...]
    const { text, icon, description, buttons, archived } = $props();

    let open = $state(false);
</script>

{#if icon.startsWith("https://")}
    <!-- Create link with image icon -->
    <div class={open ? "bg-slate-700/40 border-2 border-slate-600/50 transition-all rounded-xl p-4" : ""}>
        <button onclick={() => open = !open} class="gap-1 flex items-center md:items-start text-md px-6 py-2 rounded-full hover:bg-slate-600/40 active:bg-slate-700/60 transition-all hover:scale-105 active:scale-95 text-center md:text-left text-white font-mono">
            <img src={icon} alt={text} class="w-6 h-6 inline">
            <span class="ml-1 font-mono">{text}</span>
            {#if open}
                <i class="ph-bold ph-caret-up"></i>
                {#if archived}
                    <div class="flex flex-row items-center gap-2 bg-orange-500/50 rounded-full px-2 ml-2">
                        <p class="text-sm text-white opacity-80 text-center font-mono">Archived</p>
                    </div>
                {/if}
            {:else}
                <i class="ph-bold ph-caret-down"></i>
            {/if}
        </button>

        {#if open}
            <div class="flex flex-col gap-2" transition:slide>
                <p class="text-md text-white opacity-80 text-left max-w-128 font-mono">{description}</p>
                <div class="flex flex-row items-center justify-center gap-2">
                    <div class="flex flex-row gap-2 items-center justify-center">
                        {#each buttons as button}
                            <SmallLink href={button.href} text={button.text} bold={""} icon={button.icon} />
                        {/each}
                    </div>
                </div>
            </div>
        {/if}
    </div>
{:else}
    <!-- Create link with Phosphor icon -->
    <div class={open ? "bg-slate-700/40 border-2 border-slate-600/50 transition-all rounded-xl p-4" : ""}>
        <button onclick={() => open = !open} class="gap-1 flex items-center md:items-start text-md px-6 py-2 rounded-full hover:bg-slate-600/40 active:bg-slate-700/60 transition-all hover:scale-105 active:scale-95 text-center md:text-left text-white font-mono">
            <i class={icon}></i>
            <span class="ml-1 font-mono">{text}</span>
            {#if open}
                <i class="ph-bold ph-caret-up"></i>
                {#if archived}
                    <div class="flex flex-row items-center gap-2 bg-orange-500/50 rounded-full px-2 ml-2">
                        <p class="text-sm text-white opacity-80 text-center font-mono">Archived</p>
                    </div>
                {/if}
            {:else}
                <i class="ph-bold ph-caret-down"></i>
            {/if}
        </button>

        {#if open}
            <div class="flex flex-col gap-2" transition:slide>
                <p class="text-md text-white opacity-80 text-left font-mono">{description}</p>
                <div class="flex flex-row items-center gap-2">
                    {#each buttons as button}
                        <SmallLink href={button.href} text={button.text} bold={""} icon={button.icon} />
                    {/each}
                </div>
            </div>
        {/if}
    </div>
{/if}