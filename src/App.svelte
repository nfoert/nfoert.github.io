<script>
    import Link from "./lib/Link.svelte";
    import CollapsableLink from "./lib/CollapsableLink.svelte";
</script>

<main
    class="bg-slate-800 w-screen min-h-screen md:h-screen flex flex-col md:flex-row overflow-hidden gap-4"
>
    <div
        class="flex flex-col gap-4 h-auto md:h-full md:overflow-y-auto min-w-1/2 justify-center items-center md:items-end text-right md:pl-[25%]"
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
            <p class="text-lg text-white font-mono opacity-70">
                he/him
            </p>
        </div>

        <p class="text-2xl text-purple-800 font-mono font-bold">Full Stack Web Developer</p>

        <p class="text-sm text-white font-mono opacity-70">
            Hello! I'm nfoert, a software engineer who primarilly focuses on web development. I also experiment with lots of other random stuff, including desktop development and C++. I care a lot about open source, do 3D printing, and use Linux.
        </p>

        <p class="text-lg text-white font-mono">
            <i class="ph-bold ph-map-pin"></i> USA
        </p>
        <p class="text-lg text-white font-mono">
            <i class="ph-bold ph-clock"></i> UTC -4:00
        </p>
    </div>

    <div
        class="border-2 border-white h-2 w-3/4 md:h-1/2 md:w-2 rounded-full opacity-50 mt-auto mb-auto"
    ></div>

    <div
        class="flex flex-col gap-4 h-auto md:h-full md:overflow-y-auto min-w-1/2 justify-center items-center md:items-start text-left md:pr-[25%]"
    >
        <div class="flex flex-col gap-2 items-center md:items-start text-left pl-2">
            <p class="text-2xl text-white font-mono font-bold"><i class="ph-bold ph-link"></i> Links</p>
            <Link href="https://github.com/nfoert" text="github.com/" bold="nfoert" icon="ph-bold ph-github-logo" />
            <Link href="https://mastodon.social/@nfoert" text="mastodon.social/" bold="@nfoert" icon="ph-bold ph-mastodon-logo" />
            <Link href="https://pixelfed.social/@nfoert" text="pixelfed.social/" bold="@nfoert" icon="ph-bold ph-image" />
            <Link href="mailto:nfoert@proton.me" text="" bold="nfoert@proton.me" icon="ph-bold ph-envelope" />
        </div>
    </div>
</main>
