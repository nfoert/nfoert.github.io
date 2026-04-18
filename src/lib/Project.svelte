<script lang="ts">
    import ImageCarousel from "./ImageCarousel.svelte";

    let { title, description, icon = null, archived = false, image_urls = [], skills = [], buttons } = $props();
</script>

<div class="flex flex-col gap-2 items-center border border-slate-600 rounded-xl bg-slate-800 shadow-lg p-8">
    <div class="flex flex-col gap-2 self-start">
        <div class="flex flex-row gap-4 items-center flex-wrap">
            {#if icon}
                <img src={icon} alt={icon} class="w-16 h-16 rounded-lg shadow-lg">
            {/if}
            <p class="text-white font-mono text-2xl md:text-4xl font-bold">{title}</p>
            {#if archived}
                <p class="font-mono text-sm bg-orange-500/50 border border-orange-600 text-orange-300 py-1 px-2 rounded-full">archived</p>
            {/if}
        </div>
        <p class="text-white/50 font-mono mt-2 ml-2">{description}</p>
    </div>

    {#if skills.length > 0}
        <div class="flex flex-row gap-2 flex-wrap self-start">
            {#each skills as skill}
                <p class="bg-slate-800 border border-slate-700 px-2 py-1 rounded-full font-mono text-white/70 text-sm">{skill}</p>
            {/each}
        </div>
    {/if}

    {#if image_urls.length > 0}
        <ImageCarousel image_urls={image_urls} />
    {/if}

    <div class="flex flex-row gap-2 items-center self-start">
        {@render buttons()}
    </div>
</div>