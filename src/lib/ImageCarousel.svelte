<script lang="ts">
    import { ArrowLeftIcon, ArrowRightIcon } from "phosphor-svelte";
    import Button from "./Button.svelte";

    let { image_urls } = $props();

    let carousel = null;

    // Tailwind's lg is about 1024px
    function scrollLeft() {
        carousel.scrollBy({ top: 0, left: -500, behavior: 'smooth' });
    }

    function scrollRight() {
        carousel.scrollBy({ top: 0, left: 500, behavior: 'smooth' });
    }
</script>

<div class="flex flex-row gap-2 items-center">
    {#if image_urls.length > 1}
        <Button onclick={scrollLeft} type="icon"><ArrowLeftIcon weight="bold"/></Button>
    {/if}

    <div class="flex flex-row max-h-lg max-w-lg overflow-x-scroll snap-x" bind:this={carousel}>
        {#each image_urls as image_url}
            <img src={image_url} alt={image_url} class="aspect-square w-lg h-lg snap-center rounded-lg shadow-lg object-contain">
        {/each}
    </div>

    {#if image_urls.length > 1}
        <Button onclick={scrollRight} type="icon"><ArrowRightIcon weight="bold"/></Button>
    {/if}
</div>