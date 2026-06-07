<script lang="ts">
    import { ArrowLeftIcon, ArrowRightIcon } from "phosphor-svelte";
    import Button from "./Button.svelte";
    import ProjectSubheader from "./ProjectSubheader.svelte";
    import { innerWidth } from "svelte/reactivity/window";

    let { title, description = null, showButtons = true, children } = $props();

    let projects: HTMLDivElement | null = $state(null);
    let scrollLeftValue = $state(0);

    function scrollLeft() {
        if (!projects) return;

        projects.scrollBy({ top: 0, left: -500, behavior: 'smooth' });
    }

    function scrollRight() {
        if (!projects) return;
        
        projects.scrollBy({ top: 0, left: 500, behavior: 'smooth' });
    }

    function handleScroll() {
        if (!projects) return;

        scrollLeftValue = projects.scrollLeft;
    }
</script>

<div class="flex flex-col gap-2 items-center">
    <ProjectSubheader title={title} description={description} />

    <div class="flex flex-row gap-4 items-center">
        {#if projects && showButtons && innerWidth.current >= 1024}
            <Button onclick={scrollLeft} type="icon" disabled={scrollLeftValue == 0}><ArrowLeftIcon weight="bold"/></Button>
        {/if}

        <div class="flex lg:flex-row flex-col gap-4 lg:overflow-x-scroll lg:w-[65rem] snap-x" bind:this={projects} onscroll={handleScroll}>
            {@render children()}
        </div>

        {#if projects && showButtons && innerWidth.current >= 1024}
            <Button onclick={scrollRight} type="icon" disabled={scrollLeftValue == projects.scrollWidth - projects.clientWidth}><ArrowRightIcon weight="bold"/></Button>
        {/if}
    </div>
</div>