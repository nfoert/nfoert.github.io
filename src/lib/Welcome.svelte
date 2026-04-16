<script lang="ts">
    import { ClockIcon, EnvelopeSimpleIcon, GithubLogoIcon, MapPinIcon, MastodonLogoIcon } from "phosphor-svelte";
    import SocialLink from "./SocialLink.svelte";
    import { onMount } from "svelte";

    let now = $state(new Date());

	onMount(() => {
		const interval = setInterval(() => {
			now = new Date();
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<div class="flex flex-col h-screen items-center justify-center" id="home">
    <img src="https://github.com/nfoert.png" alt="nfoert" class="w-32 h-32 rounded-full mb-8">

    <p class="text-lg text-white font-mono">Hello, I'm</p>
    <p class="text-8xl text-white font-mono"><span class="text-green-600 drop-shadow-[0px_0px_39px_rgba(46,194,126,0.9)]">nfoert</span></p>

    <p class="text-green-600 font-mono text-lg">Full Stack Web Developer</p>

    <p class="text-white font-mono mt-4 max-w-lg text-center">I like building applications that solve real problems. I care about open source, 3D print, and self host stuff.</p>

    <div class="flex flex-row gap-1 items-center mt-4">
        <MapPinIcon weight="bold" class="text-white"/>
        <p class="text-white font-mono">USA</p>

        <ClockIcon weight="bold" class="text-white ml-4"/>
        <p class="text-white font-mono">
            {new Intl.DateTimeFormat('en-US', {
                timeZone: 'America/New_York',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }).format(now)} EST
        </p>
    </div>

    <div class="flex gap-4 mt-8">
        <SocialLink href="https://github.com/nfoert">
            {#snippet icon()}
                <GithubLogoIcon weight="bold"/>
            {/snippet}
        </SocialLink>

        <SocialLink href="https://mastodon.social/@nfoert">
            {#snippet icon()}
                <MastodonLogoIcon weight="bold"/>
            {/snippet}
        </SocialLink>

        <SocialLink href="mailto:nfoert@proton.me">
            {#snippet icon()}
                <EnvelopeSimpleIcon weight="bold"/>
            {/snippet}
        </SocialLink>
    </div>
</div>