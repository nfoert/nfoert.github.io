<script>
    import Link from './lib/Link.svelte'
</script>

<main class="bg-slate-700">
    <div class="flex items-center justify-center min-h-screen min-w-screen">
        <div class="flex flex-col md:flex-row items-center justify-center gap-6">
            <div class="flex flex-col w-2/3 md:w-1/4 gap-2 items-center md:items-end">
                <img src="https://github.com/nfoert.png" alt="nfoert" class="w-32 h-32 rounded-full border-2 border-slate-600/50">
                <p class="text-2xl font-bold text-white text-center md:text-right">nfoert</p>
                <p class="text-md text-white text-center md:text-right opacity-80">he/him</p>
                <p class="text-md text-white text-center md:text-right">Full stack web developer, who cares about open source and has experience in C++ and self hosting</p>
            </div>
    
            <div class="bg-slate-700/50 w-full h-2 md:w-2 md:h-auto rounded-full border-slate-600/50 border-2 md:self-stretch"></div>
    
            <div class="flex flex-col w-2/3 md:w-1/4 gap-2">
                <Link href="https://github.com/nfoert" text="github.com/" bold="nfoert" icon="ph-bold ph-github-logo" />
                <Link href="https://mastodon.social/@nfoert" text="mastodon.social/" bold="@nfoert" icon="ph-bold ph-mastodon-logo" />
                <Link href="https://pixelfed.social/@nfoert" text="pixelfed.social/" bold="@nfoert" icon="ph-bold ph-image" />
            </div>
        </div>
    </div>
</main>

