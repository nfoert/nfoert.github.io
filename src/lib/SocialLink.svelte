<script lang="ts">
    let { icon, href } = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="flex items-center gap-2">
    <a href={href} class="text-4xl text-white hover:scale-105 opacity-50 hover:opacity-100 transition-all hover:drop-shadow-glow">{@render icon()}</a>
</div>