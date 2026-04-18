<script lang="ts">
    let { title, description } = $props();
</script>

<div class="mt-32 ml-16">
    <p class="text-white font-mono text-4xl">{title}</p>
    <p class="text-white/50 font-mono mt-2 ml-2">{description}</p>
</div>