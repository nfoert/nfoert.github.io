<script lang="ts">
    import { onMount } from "svelte";
    import Footer from "./lib/Footer.svelte";
    import NavBar from "./lib/NavBar.svelte";
    import Projects from "./lib/Projects.svelte";
    import Welcome from "./lib/Welcome.svelte";
    import { fade } from "svelte/transition";

    let ready = $state(false);

    onMount(() => {
        window.addEventListener("load", () => {
            setTimeout(() => {
                ready = true;
            }, 500);
        })
    })
</script>

{#if ready}
    <div transition:fade>
        <NavBar />
        <Welcome />
        <Projects />
        <Footer />
    </div>
{/if}