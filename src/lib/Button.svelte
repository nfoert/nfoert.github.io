<script lang="ts">
    type Props = {
        children?: any;
        onclick?: (e: MouseEvent) => void;
        href?: string;
        type?: "default" | "icon";
        variant?: "default" | "outline";
    };

    let {
        children,
        onclick,
        href = "",
        type = "default",
        variant = "default"
    }: Props = $props();

    const baseClasses =
        "transition-colors rounded-full shadow-md border";

    const variants = {
        default:
            "bg-green-700 border-green-500 text-white hover:bg-green-800 active:bg-green-900",

        outline:
            "bg-transparent border-slate-700 text-white hover:bg-slate-800/50 active:bg-slate-900/50"
    };

    const sizes = {
        icon: "p-2",
        default: "px-4 py-2"
    };

    const classes = $derived(`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[type]}
    `);
</script>

{#if href}
    <a href={href} class={classes}>
        {#if children}
            <div class="flex flex-row gap-2 items-center">
                {@render children()}
            </div>
        {/if}
    </a>
{:else}
    <button onclick={onclick} class={classes}>
        {#if children}
            <div class="flex flex-row gap-2 items-center">
                {@render children()}
            </div>
        {/if}
    </button>
{/if}