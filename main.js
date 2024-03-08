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