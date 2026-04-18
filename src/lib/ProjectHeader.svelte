<script lang="ts">
    let { title, description = null } = $props();
</script>

<div class="mt-16 md:mt-32 ml-8 md:ml-16">
    <p class="text-white font-mono text-4xl">{title}</p>

    {#if description}
        <p class="text-white/50 font-mono mt-2 ml-2">{description}</p>
    {/if}
</div>