<script>
    import Link from './lib/Link.svelte'
</script>

<main class="bg-slate-700">
    <div class="flex items-center justify-center min-h-screen min-w-screen">
        <div class="flex flex-col md:flex-row items-center justify-center gap-2">
            <div class="flex flex-col w-2/3 md:w-1/4 gap-2">
                <p class="text-2xl font-bold text-white text-right">nfoert</p>
                <p class="text-md text-white text-right opacity-80">he/him</p>
                <p class="text-md text-white text-right">Full stack web developer, who cares about open source and has experience in C++ and self hosting</p>
            </div>
    
            <div class="bg-slate-700/50 w-full h-2 md:w-2 md:h-auto rounded-full border-slate-600/50 border-2 md:self-stretch"></div>
    
            <div class="flex flex-col w-2/3 md:w-1/4 gap-2">
                <Link href="https://github.com/nfoert" text="GitHub" icon="ph-bold ph-github-logo" />
                <Link href="https://github.com/nfoert" text="GitHub" icon="https://raw.githubusercontent.com/FRC-Team3484/open-scouting/refs/heads/main/repo/images/icon.png" />
            </div>
        </div>
    </div>
</main>

