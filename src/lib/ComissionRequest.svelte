<script lang="ts">
    import { EnvelopeSimpleIcon } from "phosphor-svelte";
import Button from "./Button.svelte";


</script>

<div class="flex flex-col gap-2 items-center justify-center border border-slate-600 rounded-xl bg-slate-800 shadow-lg p-8 max-h-64">
    <p class="font-mono text-white text-xl">Request a commission</p>
    <Button href="mailto:nfoert@proton.me"><EnvelopeSimpleIcon weight="bold"/> Email me</Button>
</div>