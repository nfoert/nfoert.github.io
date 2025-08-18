<script>
    import Link from "./lib/Link.svelte";
    import CollapsableLink from "./lib/CollapsableLink.svelte";
</script>

<main
  class="bg-slate-800 w-screen min-h-screen md:h-screen flex flex-col md:flex-row gap-4 
         overflow-visible md:overflow-hidden"
>
   <div
    class="flex flex-col gap-4 h-auto md:h-full md:overflow-y-auto
           min-w-1/2 justify-center items-start md:items-end ml-6 md:ml-0
           text-left md:text-right md:pl-[25%] mt-12 md:mt-0"
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
            <i class="ph-bold ph-clock"></i> UTC -4:00
        </p>
    </div>

    <div
    class="border-2 border-slate-400/50 h-2 w-3/4 md:h-1/2 md:w-2 rounded-full 
           opacity-50 mt-auto mb-auto ml-auto mr-auto bg-slate-600/50"
  ></div>

    <div
    class="flex flex-col gap-8 h-auto md:h-full md:overflow-y-auto
           min-w-1/2 justify-center items-start ml-6 md:ml-0
           text-left md:pr-[25%] mt-0"
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
                            href: "https://open-scouting.duckdns.org",
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

        <p class="text-sm text-white font-mono opacity-50">
            Created with <a class="underline" href="https://svelte.dev"
                >Svelte</a
            >
            and
            <a class="underline" href="https://tailwindcss.com/">Tailwind CSS</a
            > by nfoert
        </p>
    </div>
</main>
