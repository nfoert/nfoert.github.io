<script lang="ts">
    import { AppWindowIcon, GithubLogoIcon } from "phosphor-svelte";
    import Button from "./Button.svelte";
    import Project from "./Project.svelte";
    import ProjectHeader from "./ProjectHeader.svelte";
    import ProjectSubheader from "./ProjectSubheader.svelte";
    import ComissionRequest from "./ComissionRequest.svelte";
</script>

<div class="flex flex-col h-auto" id="projects">
    <ProjectHeader title="Projects" description="Projects I've worked on" />

    <ProjectSubheader title="Open Source" />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ml-8 mr-8">
        <Project 
            title="Open Scouting" 
            description="An open source application for easier scouting at FIRST robotics competitions"
            icon="https://github.com/FRC-Team3484/open-scouting/blob/main/repo/images/icon.png?raw=true"
            archived={false}
            image_urls={[
                "https://github.com/FRC-Team3484/open-scouting/blob/main/repo/images/mockup.png?raw=true", 
                "https://github.com/FRC-Team3484/open-scouting/blob/main/repo/images/mockup.png?raw=true"
            ]}
            skills={[
                "Typescript",
                "SvelteKit",
                "Tailwind CSS",
                "shadcn-svelte",
                "FastAPI",
                "PostgreSQL",
                "Orval"
            ]}
        >
            {#snippet buttons()}
                <Button href="https://github.com/FRC-Team3484/open-scouting"><GithubLogoIcon weight="bold"/> GitHub</Button>
                <Button href="https://open-scouting.shortcircuitfirst.org"><AppWindowIcon weight="bold"/> Live Server</Button>
            {/snippet}
        </Project>

        <Project 
            title="Building Competition" 
            description="A Minecraft paper plugin for a long-term building competition"
            icon="https://cdn.modrinth.com/data/FxNmL5Xe/2d377aa4c6687c6ab824fda10c8c35ff1c0a1c7c_96.webp"
            archived={false}
            image_urls={[
                "https://cdn.modrinth.com/data/FxNmL5Xe/images/07bc5c18c1434e923d0abfaa82fb1c508ee6318b_350.webp", 
            ]}
            skills={[
                "Java",
                "PaperMC",
                "MiniMessage"
            ]}
        >
            {#snippet buttons()}
                <Button href="https://github.com/nfoert/building-competition"><GithubLogoIcon weight="bold"/> GitHub</Button>
                <Button href="https://modrinth.com/plugin/building-competition"><AppWindowIcon weight="bold"/> Modrinth</Button>
            {/snippet}
        </Project>

        <Project 
            title="Cardie" 
            description="An open source business card designer and sharing platform"
            icon="https://github.com/nfoert/cardie/blob/main/repo/images/icon_rounded.png?raw=true"
            archived={true}
            image_urls={[
                "https://github.com/nfoert/cardie/blob/main/repo/images/screenshot1.png?raw=true", 
            ]}
            skills={[
                "Python",
                "JavaScript",
                "Django",
                "Alpine.js"
            ]}
        >
            {#snippet buttons()}
                <Button href="https://github.com/nfoert/cardie"><GithubLogoIcon weight="bold"/> GitHub</Button>
            {/snippet}
        </Project>

        <Project 
            title="Circles" 
            description="Circles is an open source, decentralized social network that allows users to move and interact within physical spaces. "
            icon="https://raw.githubusercontent.com/nfoert/circles/refs/heads/main/main/static/main/images/favicon.ico"
            archived={true}
            image_urls={[
                "https://github.com/nfoert/circles/blob/main/repo/images/circles_main.png?raw=true", 
            ]}
            skills={[
                "Python",
                "JavaScript",
                "Django",
            ]}
        >
            {#snippet buttons()}
                <Button href="https://github.com/nfoert/circles"><GithubLogoIcon weight="bold"/> GitHub</Button>
            {/snippet}
        </Project>

        <Project 
            title="niri-dotfiles" 
            description="My dotfiles for niri"
            archived={false}
            skills={[
                "Shell",
                "Dotfiles",
            ]}
        >
            {#snippet buttons()}
                <Button href="https://github.com/nfoert/niri-dotfiles"><GithubLogoIcon weight="bold"/> GitHub</Button>
            {/snippet}
        </Project>

        <Project 
            title="pico-smart-home" 
            description="A collection of scripts for setting up Raspberry Pi Pico W as smart home devices and sensors"
            archived={false}
            skills={[
                "Python",
                "mqtt",
                "yaml",
            ]}
        >
            {#snippet buttons()}
                <Button href="https://github.com/nfoert/pico-smart-home"><GithubLogoIcon weight="bold"/> GitHub</Button>
            {/snippet}
        </Project>

        <Project 
            title="nfoert.github.io" 
            description="My portfolio site"
            icon="favicon.ico"
            archived={false}
            skills={[
                "Svelte",
                "Tailwind CSS",
            ]}
        >
            {#snippet buttons()}
                <Button href="https://github.com/nfoert/nfoert.github.io"><GithubLogoIcon weight="bold"/> GitHub</Button>
            {/snippet}
        </Project>

        
    </div>

    <ProjectSubheader title="Commissions" />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ml-8 mr-8">

        <Project 
            title="Dakota's Custom Crafts" 
            description="Custom store site for Dakota's Custom Crafts"
            icon="dakotascustomcrafts.png"
            archived={false}
            image_urls={[
                "dakotascustomcrafts_screenshot.png", 
            ]}
            skills={[
                "SvelteKit",
                "Pocketbase",
                "Tailwind CSS"
            ]}
        >
            {#snippet buttons()}
                <Button href="https://dakotascustomcrafts.com"><AppWindowIcon weight="bold"/> Live Server</Button>
            {/snippet}
        </Project>

        <ComissionRequest />
    </div> 
</div>  