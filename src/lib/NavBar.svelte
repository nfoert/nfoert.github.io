<script lang="ts">
    import { onDestroy, onMount } from "svelte";

    let location = $state('home');
    let projectsElement = null;

    function updateLocation() {
        const scrollPosition = window.scrollY;
        const projectsPosition = projectsElement ? projectsElement.offsetTop : Infinity;

        if (scrollPosition >= projectsPosition) {
            location = 'projects';
        } else {
            location = 'home';
        }
    }

    function scrollToSection(sectionId: string) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    onMount(() => {
        projectsElement = document.getElementById('projects');
        window.addEventListener('scroll', updateLocation);
    });

    onDestroy(() => {
        window.removeEventListener('scroll', updateLocation);
    });
</script>

<div class="fixed top-0 left-0 text-white font-mono text-md md:text-2xl flex flex-row gap-2 p-4 bg-slate-900/50 backdrop-blur-md z-5 w-screen flex-wrap">
    <button onclick={() => scrollToSection("home")} class={location === 'home' ? 'text-green-600 hover:text-green-500 transition-colors' : 'text-white/50 hover:text-white transition-colors'}>nfoert</button>
    <p class="text-white/50">/</p>
    <button onclick={() => scrollToSection("projects")} class={location === 'projects' ? 'text-green-600 hover:text-green-500 transition-colors' : 'text-white/50 hover:text-white transition-colors'}>projects</button>
</div>

