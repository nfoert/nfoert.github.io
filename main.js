window.addEventListener("load", function() {
    document.getElementById("content").classList.add("appear");
});

document.getElementById("links-projects-button").addEventListener("click", function() {
    document.getElementById("links-links").style.opacity = 0;
    
    setTimeout(function() {
        document.getElementById("links-links").style.display = "none";

        document.getElementById("links-projects").style.display = "flex";

        setTimeout(function() {
            document.getElementById("links-projects").style.opacity = 1;
        }, 300);
    }, 400);
    
});

document.getElementById("links-links-button").addEventListener("click", function() {
    document.getElementById("links-projects").style.opacity = 0;

    setTimeout(function() {
        document.getElementById("links-projects").style.display = "none";

        document.getElementById("links-links").style.display = "flex";

        setTimeout(function() {
            document.getElementById("links-links").style.opacity = 1;
        }, 300);
    }, 400);

});

document.addEventListener('mousemove', function(event) {
    document.getElementById("animation-circle").style.left = event.clientX + "px";
    document.getElementById("animation-circle").style.top = event.clientY + "px";
});

for (item in document.querySelectorAll(".link:not(.no-url)")) {
    try {
        document.querySelectorAll(".link:not(.no-url)")[item].addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("animation-circle").style.scale = "2000";

            setTimeout(function() {
                window.location.href = event.target.closest("a").getAttribute("url");
            }, 1000);

            setTimeout(function() {
                document.getElementById("animation-circle").style.scale = "0";
            }, 3000);
        })
    } catch (TypeError) {
        null;
    }
    
}