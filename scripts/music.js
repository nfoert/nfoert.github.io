var playing = false;

function fade_out_in(element) {
    
}

document.addEventListener("DOMContentLoaded", function() {
    var audio = new Audio("Glimpsing Infinity - Asher Fulero.mp3") // From the YouTube Audio Library
    var play_button = document.getElementById("play_button");
    audio.volume = 0.5;
    
    play_button.addEventListener("click", function() {
        if (playing == false) {
            audio.play();
            play_button.innerHTML = "Pause";
            playing = true;
        }
        else if (playing == true) {
            audio.pause();
            play_button.innerHTML = "Play";
            playing = false;
            
        }
        

    });
});
