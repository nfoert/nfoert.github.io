<script>
    import { fade, slide } from 'svelte/transition';

    import Link from './lib/Link.svelte';
    import CollapsableLink from './lib/CollapsableLink.svelte';

    let projects = $state(true);
</script>

<main class="bg-slate-800">
    <div class="flex items-center justify-center min-h-screen min-w-screen">
        <div class="flex flex-col md:flex-row items-center justify-center gap-6">
            <div class="flex flex-col w-2/3 md:w-1/4 gap-2 items-center md:items-end">
                <a href="https://github.com/nfoert">
                    <img src="https://github.com/nfoert.png" alt="nfoert" class="w-32 h-32 rounded-full border-2 border-slate-600/50 hover:scale-105 active:scale-95 transition-transform">
                </a>
                <p class="text-2xl font-bold text-white text-center md:text-right">nfoert</p>
                <p class="text-md text-white text-center md:text-right opacity-80">he/him</p>
                <p class="text-md text-white text-center md:text-right">Full stack web developer, who cares about open source and has experience in C++ and self hosting</p>

                <img class="w-3/4 md:w-full" src="https://skillicons.dev/icons?i=html,css,js,alpinejs,tailwind,svelte,github,git,godot,python,django,cpp" alt="skillicons" />
            </div>
    
            <div class="bg-slate-700/50 w-full h-2 md:w-2 md:h-auto rounded-full border-slate-600/50 border-2 md:self-stretch"></div>
            
            <div class="flex flex-col w-2/3 md:w-1/4 gap-2">
                {#if projects}
                    <div class="flex flex-col gap-2" transition:slide>
                        <Link href="https://github.com/nfoert" text="github.com/" bold="nfoert" icon="ph-bold ph-github-logo" />
                        <Link href="https://mastodon.social/@nfoert" text="mastodon.social/" bold="@nfoert" icon="ph-bold ph-mastodon-logo" />
                        <Link href="https://pixelfed.social/@nfoert" text="pixelfed.social/" bold="@nfoert" icon="ph-bold ph-image" />
                        <button onclick={() => projects = false} class="flex items-center md:items-left text-md px-6 py-2 rounded-full hover:bg-slate-600/40 active:bg-slate-700/60 transition-all hover:scale-105 active:scale-95 text-center md:text-left text-white">
                            <i class="ph-bold ph-arrow-down"></i> Projects
                        </button>
                    </div>
                {/if}

                {#if !projects}
                    <div class="flex flex-col gap-2" transition:slide>
                        <button onclick={() => projects = true} class="flex items-center md:items-left text-md px-6 py-2 rounded-full hover:bg-slate-600/40 active:bg-slate-700/60 transition-all hover:scale-105 active:scale-95 text-center md:text-left text-white"><i class="ph-bold ph-arrow-up"></i> Links</button>
                        <CollapsableLink 
                            text="Open Scouting" 
                            icon="https://raw.githubusercontent.com/FRC-Team3484/open-scouting/refs/heads/main/repo/images/icon.png" 
                            description="An open source application for easier scouting at FIRST Robotics competitions"
                            buttons={[{"text": "Source Code", "href": "https://github.com/FRC-Team3484/open-scouting", "icon": "ph-bold ph-github-logo"}, {"text": "Live Server", "href": "https://open-scouting.duckdns.org", "icon": "ph-bold ph-browser"}]}
                            archived={false}
                        />
                        <CollapsableLink 
                            text="Cardie" 
                            icon="https://raw.githubusercontent.com/nfoert/cardie/refs/heads/main/repo/images/icon_rounded.png" 
                            description="An open source business card designer and sharing platform"
                            buttons={[{"text": "Source Code", "href": "https://github.com/nfoert/cardie", "icon": "ph-bold ph-github-logo"}]}
                            archived={true}
                        />
                        <CollapsableLink 
                            text="Circles" 
                            icon="https://raw.githubusercontent.com/nfoert/circles/refs/heads/main/main/static/main/images/favicon.ico" 
                            description="Circles is an open source, decentralized social network that allows users to move and interact within physical spaces."
                            buttons={[{"text": "Source Code", "href": "https://github.com/nfoert/circles", "icon": "ph-bold ph-github-logo"}]}
                            archived={true}
                        />
                        <Link href="https://github.com/nfoert/nfoert.github.io" text="nfoert.github.io" bold="" icon="ph-bold ph-browser" />
                        <Link href="https://github.com/nfoert/niri-dotfiles" text="niri-dotfiles" bold="" icon="ph-bold ph-file" />
                        <Link href="https://github.com/nfoert/md-to-html" text="md-to-html" bold="" icon="ph-bold ph-file-md" />
                        <Link href="https://github.com/nfoert/pico-smart-home" text="pico-smart-home" bold="" icon="ph-bold ph-house" />
                        <Link href="https://github.com/nfoert?tab=repositories" text="" bold="And more..." icon="ph-bold ph-github-logo" />
                    </div>
                {/if}
            </div>
            
        </div>
    </div>
</main>

