<script lang="ts">
    let { title, description = null } = $props();
</script>

<div class="mt-16 ml-10">
    <p class="text-white font-mono text-2xl"><span class="text-white/50">/</span> {title}</p>

    {#if description}
        <p class="text-white/50 font-mono mt-2 ml-2">{description}</p>
    {/if}
</div>