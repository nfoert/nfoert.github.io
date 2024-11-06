window.addEventListener("load", function() {
    document.getElementById("content").classList.add("appear");
});

document.addEventListener('mousemove', function(event) {
    document.getElementById("animation-circle").style.left = event.clientX + "px";
    document.getElementById("animation-circle").style.top = event.clientY + "px";
});

document.addEventListener('touchmove', function(event) {
    document.getElementById("animation-circle").style.left = event.touches[0].clientX + "px";
    document.getElementById("animation-circle").style.top = event.touches[0].clientY + "px";
});

for (let item of document.querySelectorAll(".link:not(.no-url)")) {
    try {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("animation-circle").style.scale = "2000";

            setTimeout(function() {
                window.location.href = event.target.closest("a").getAttribute("url");
            }, 1000);

            setTimeout(function() {
                document.getElementById("animation-circle").style.scale = "0";
            }, 3000);
        });
        
        item.addEventListener("touchstart", function(event) {
            event.preventDefault();
            document.getElementById("animation-circle").style.scale = "2000";

            setTimeout(function() {
                window.location.href = event.target.closest("a").getAttribute("url");
            }, 1000);

            setTimeout(function() {
                document.getElementById("animation-circle").style.scale = "0";
            }, 3000);
        });
    } catch (TypeError) {
        null;
    }
}
