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

function moveCircle(event) {
    const circle = document.getElementById("animation-circle");
    const x = event.clientX || event.touches[0].clientX;
    const y = event.clientY || event.touches[0].clientY;
    circle.style.left = x + "px";
    circle.style.top = y + "px";
}

document.addEventListener('mousemove', moveCircle);
document.addEventListener('touchmove', moveCircle);

const links = document.querySelectorAll(".link:not(.no-url)");

links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("animation-circle").style.scale = "2000";

        setTimeout(function() {
            window.location.href = event.target.closest("a").getAttribute("url");
        }, 1000);

        setTimeout(function() {
            document.getElementById("animation-circle").style.scale = "0";
        }, 3000);
    });

    link.addEventListener("touchend", function(event) {
        event.preventDefault();
        document.getElementById("animation-circle").style.scale = "2000";

        setTimeout(function() {
            window.location.href = event.target.closest("a").getAttribute("url");
        }, 1000);

        setTimeout(function() {
            document.getElementById("animation-circle").style.scale = "0";
        }, 3000);
    });
});
