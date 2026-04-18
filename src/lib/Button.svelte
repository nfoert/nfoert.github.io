<script lang="ts">
    type Props = {
        children?: any;
        onclick?: (e: MouseEvent) => void;
        href?: string;
        type?: "default" | "icon";
    };

    let { children, onclick, href = "", type = "default" }: Props = $props();
</script>

{#if href}
    <a href={href} class={
        type === "icon"
            ? "bg-slate-800 border border-slate-700 text-white hover:bg-slate-700 active:bg-slate-900 transition-colors rounded-full shadow-md p-2"
            : "bg-slate-800 border border-slate-700 text-white hover:bg-slate-700 active:bg-slate-900 transition-colors rounded-full shadow-md px-4 py-2"
    }>
        {#if children}
            <div class="flex flex-row gap-2 items-center">{@render children()}</div>
        {/if}
    </a>
{:else}
    <button onclick={onclick} class={
        type === "icon"
            ? "bg-slate-800 border border-slate-700 text-white hover:bg-slate-700 active:bg-slate-900 transition-colors rounded-full shadow-md p-2"
            : "bg-slate-800 border border-slate-700 text-white hover:bg-slate-700 active:bg-slate-900 transition-colors rounded-full shadow-md px-4 py-2"
    }>
        {#if children}
            <div class="flex flex-row gap-2 items-center">{@render children()}</div>
        {/if}
    </button>
{/if}
