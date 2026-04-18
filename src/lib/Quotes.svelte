<script lang="ts">
    let quotes = [
        "The line must go up",
        "bg-slate-800 is my favorite color",
        "I'm a real programmer so you don't get dark mode",
        "It works on my machine",
        "I use arch btw",
    ]
    let quote = $state(getRandomQuote());

    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)]
    }
</script>

<p class="text-md text-white/50 font-mono italic mt-4 text-center">"{quote}"</p>