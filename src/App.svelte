<script>
    import Link from "./lib/Link.svelte";
    import CollapsableLink from "./lib/CollapsableLink.svelte";
    import SkillChip from "./lib/SkillChip.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        const clock = document.getElementById("clock");
        const now = new Date();
        const offset = 0;
        
        function updateClock() {
            const now = new Date(Date.now() + offset);
            const hours = `0${now.getHours()}`.slice(-2);
            const minutes = `0${now.getMinutes()}`.slice(-2);
            const seconds = `0${now.getSeconds()}`.slice(-2);

            clock.textContent = `${hours}:${minutes}:${seconds}`;
        }

        updateClock();
        setInterval(updateClock, 1000);
    });
</script>

<main
    class="bg-slate-800 w-screen min-h-screen md:h-screen flex flex-col md:flex-row gap-4
         overflow-visible md:overflow-hidden md:items-center"
>
    <div
        class="flex flex-col gap-4 h-auto md:max-h-[50vh] md:overflow-y-auto
           min-w-1/2 justify-start items-start md:items-end ml-6 md:ml-0
           text-left md:text-right md:pl-[25%] mt-12 md:mt-0 overflow-x-hidden scroll-shadow md:p-6"
    >
        <a href="https://github.com/nfoert">
            <img
                src="https://github.com/nfoert.png"
                alt="nfoert"
                class="w-32 h-32 rounded-full border-2 border-slate-600/50 hover:scale-105 active:scale-95 transition-transform"
            />
        </a>
        <div class="flex flex-row gap-2 items-center">
            <p class="text-4xl text-white font-mono font-bold">nfoert</p>
            <p class="text-lg text-white font-mono opacity-70">he/him</p>
        </div>

        <p class="text-2xl text-purple-800 font-mono font-bold">
            Full Stack Web Developer
        </p>

        <p class="text-sm text-white font-mono opacity-70">
            Hello! I'm nfoert, a software engineer who primarilly focuses on web
            development. I also experiment with lots of other random stuff,
            including desktop development and C++. I care a lot about open
            source, do 3D printing, and use Linux.
        </p>

        <p class="text-lg text-white font-mono">
            <i class="ph-bold ph-map-pin"></i> USA
        </p>
        <p class="text-lg text-white font-mono">
            <i class="ph-bold ph-clock"></i>
            <span id="clock"></span>
            <span class="opacity-70 text-sm">EST</span>
        </p>
    </div>

    <div
        class="border-2 border-slate-400/50 h-2 w-3/4 md:h-4/6 md:w-2 rounded-full
           opacity-50 mt-auto mb-auto ml-auto mr-auto bg-slate-600/50"
    ></div>

    <div
        class="flex flex-col gap-8 h-auto md:max-h-[50vh] md:overflow-y-scroll
           min-w-1/2 justify-start items-start ml-6 md:ml-0
           text-left md:pr-[25%] overflow-x-hidden scroll-shadow md:p-6"
    >
        <div class="flex flex-col gap-2 items-start text-left">
            <p class="text-2xl text-white font-mono font-bold">
                <i class="ph-bold ph-link"></i> Links
            </p>

            <div
                class="flex flex-col gap-2 items-start text-left border-slate-500/50 border-l-2 pl-2"
            >
                <Link
                    href="https://github.com/nfoert"
                    text="github.com/"
                    bold="nfoert"
                    icon="ph-bold ph-github-logo"
                />
                <Link
                    href="https://mastodon.social/@nfoert"
                    text="mastodon.social/"
                    bold="@nfoert"
                    icon="ph-bold ph-mastodon-logo"
                />
                <Link
                    href="https://pixelfed.social/@nfoert"
                    text="pixelfed.social/"
                    bold="@nfoert"
                    icon="ph-bold ph-image"
                />
                <Link
                    href="mailto:nfoert@proton.me"
                    text=""
                    bold="nfoert@proton.me"
                    icon="ph-bold ph-envelope"
                />
            </div>
        </div>

        <div class="flex flex-col gap-2 items-start text-left md:pl-2">
            <p class="text-2xl text-white font-mono font-bold">
                <i class="ph-bold ph-squares-four"></i> Projects
            </p>

            <div
                class="flex flex-col gap-2 items-start text-left border-slate-500/50 border-l-2 pl-2"
            >
                <p class="text-md text-white font-mono ml-6 opacity-70">
                    / Open Source
                </p>
                <CollapsableLink
                    text="Open Scouting"
                    icon="https://raw.githubusercontent.com/FRC-Team3484/open-scouting/refs/heads/main/repo/images/icon.png"
                    description="An open source application for easier scouting at FIRST Robotics competitions"
                    buttons={[
                        {
                            text: "Source Code",
                            href: "https://github.com/FRC-Team3484/open-scouting",
                            icon: "ph-bold ph-github-logo",
                        },
                        {
                            text: "Live Server",
                            href: "https://206.189.255.232/",
                            icon: "ph-bold ph-browser",
                        },
                    ]}
                    archived={false}
                />
                <CollapsableLink
                    text="Cardie"
                    icon="https://raw.githubusercontent.com/nfoert/cardie/refs/heads/main/repo/images/icon_rounded.png"
                    description="An open source business card designer and sharing platform"
                    buttons={[
                        {
                            text: "Source Code",
                            href: "https://github.com/nfoert/cardie",
                            icon: "ph-bold ph-github-logo",
                        },
                    ]}
                    archived={true}
                />
                <CollapsableLink
                    text="Circles"
                    icon="https://raw.githubusercontent.com/nfoert/circles/refs/heads/main/main/static/main/images/favicon.ico"
                    description="Circles is an open source, decentralized social network that allows users to move and interact within physical spaces."
                    buttons={[
                        {
                            text: "Source Code",
                            href: "https://github.com/nfoert/circles",
                            icon: "ph-bold ph-github-logo",
                        },
                    ]}
                    archived={true}
                />
                <Link
                    href="https://github.com/nfoert/nfoert.github.io"
                    text="nfoert.github.io"
                    bold=""
                    icon="ph-bold ph-browser"
                />
                <Link
                    href="https://github.com/nfoert/niri-dotfiles"
                    text="niri-dotfiles"
                    bold=""
                    icon="ph-bold ph-file"
                />
                <Link
                    href="https://github.com/nfoert?tab=repositories"
                    text=""
                    bold="And more..."
                    icon="ph-bold ph-github-logo"
                />
            </div>

            <div
                class="flex flex-col gap-2 items-start text-left border-slate-500/50 border-l-2 pl-2 mt-6"
            >
                <p class="text-md text-white font-mono ml-6 opacity-70">
                    / Client Work
                </p>

                <Link
                    href="https://dakotascustomcrafts.com"
                    text="Dakota's Custom Crafts"
                    bold=""
                    icon="/dakotascustomcrafts.png"
                />

                <Link
                    href="mailto:nfoert@proton.me"
                    text="Request a Commission"
                    bold=""
                    icon="ph-bold ph-envelope"
                />
            </div>
        </div>

        <div class="flex flex-col gap-2 items-start text-left">
            <p class="text-2xl text-white font-mono font-bold">
                <i class="ph-bold ph-list"></i> Skills
            </p>

            <div
                class="flex flex-col gap-2 items-start text-left border-slate-500/50 border-l-2 pl-2"
            >
                <p class="text-md text-white font-mono ml-6 opacity-70">
                    / Programming Languages
                </p>

                <div class="flex flex-row gap-2 flex-wrap">
                    <SkillChip href="https://www.python.org/" text="Python" />
                    <SkillChip href="https://cplusplus.com/" text="C++" />
                    <SkillChip
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                        text="HTML"
                    />
                    <SkillChip
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                        text="CSS"
                    />
                    <SkillChip
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                        text="JavaScript"
                    />
                </div>
            </div>

            <div
                class="flex flex-col gap-2 items-start text-left border-slate-500/50 border-l-2 pl-2 mt-6"
            >
                <p class="text-md text-white font-mono ml-6 opacity-70">
                    / Web Development
                </p>

                <div class="flex flex-row gap-2 flex-wrap">
                    <SkillChip
                        href="https://www.djangoproject.com/"
                        text="Django"
                    />
                    <SkillChip
                        href="https://tailwindcss.com/"
                        text="Tailwind CSS"
                    />
                    <SkillChip href="https://svelte.dev/" text="Svelte" />
                    <SkillChip href="https://alpinejs.dev/" text="Alpine.js" />
                    <SkillChip
                        href="https://pocketbase.io/"
                        text="PocketBase"
                    />
                    <SkillChip
                        href="https://github.com/arp242/goatcounter"
                        text="Goatcounter"
                    />
                    <SkillChip
                        href="https://www.electronjs.org/"
                        text="Electron"
                    />
                </div>
            </div>

            <div
                class="flex flex-col gap-2 items-start text-left border-slate-500/50 border-l-2 pl-2 mt-6"
            >
                <p class="text-md text-white font-mono ml-6 opacity-70">
                    / Other
                </p>

                <div class="flex flex-row gap-2 flex-wrap">
                    <SkillChip href="https://www.linux.org/" text="Linux" />
                    <SkillChip href="https://www.docker.com/" text="Docker" />
                    <SkillChip href="https://github.com/" text="Git & GitHub" />
                    <SkillChip
                        href="https://www.markdownguide.org/"
                        text="Markdown"
                    />
                    <SkillChip href="https://godotengine.org/" text="Godot" />
                    <SkillChip
                        href="https://code.visualstudio.com/"
                        text="VS Code"
                    />
                    <SkillChip href="https://www.qt.io/" text="QT" />
                    <SkillChip
                        href="https://textual.textualize.io/"
                        text="Textual"
                    />
                </div>
            </div>
        </div>

        <p class="text-sm text-white font-mono opacity-50 mb-12 md:mb-0">
            Created with <a class="underline" href="https://svelte.dev"
                >Svelte</a
            >
            and
            <a class="underline" href="https://tailwindcss.com/">Tailwind CSS</a
            > by nfoert
        </p>
    </div>
</main>

<style>
    /* Thanks to https://codepen.io/chriscoyier/pen/YzXBYvL */
    @media (min-width: 48rem) {
        .scroll-shadow {
            overflow-y: auto;
            overflow-x: hidden;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
            overflow-scrolling: touch;

            background:
            /* Shadow Cover TOP */
                linear-gradient(
                        oklch(27.9% 0.041 260.031) 30%,
                        rgba(255, 255, 255, 0)
                    )
                    center top,
                /* Shadow Cover BOTTOM */
                    linear-gradient(
                        rgba(255, 255, 255, 0),
                        oklch(27.9% 0.041 260.031) 70%
                    )
                    center bottom,
                /* Shadow TOP */
                    radial-gradient(
                        farthest-side at 50% 0,
                        rgba(0, 0, 0, 0.2),
                        rgba(0, 0, 0, 0)
                    )
                    center top,
                /* Shadow BOTTOM */
                    radial-gradient(
                        farthest-side at 50% 100%,
                        rgba(0, 0, 0, 0.2),
                        rgba(0, 0, 0, 0)
                    )
                    center bottom;

            background-repeat: no-repeat;
            background-size:
                100% 40px,
                100% 40px,
                100% 20px,
                100% 20px;
            background-attachment: local, local, scroll, scroll;
        }

        .scroll-shadow::-webkit-scrollbar {
            /* WebKit browsers (Chrome, Safari, Opera) */
            width: 0;
            height: 0;
        }
    }
</style>
