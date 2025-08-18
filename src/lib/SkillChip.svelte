<script>
    const { href, text } = $props();
</script>

<a {href} class="flex items-center text-sm px-4 py-1 rounded-full hover:bg-slate-600/40 active:bg-slate-700/60 transition-all hover:scale-105 active:scale-95 text-center text-white font-mono">{text}</a>
