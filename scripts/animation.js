function sleep(seconds) {
    seconds = seconds * 1000
    return new Promise(resolve => setTimeout(resolve, seconds));
}

async function main() {
    var video = document.getElementById("video_box")
    var photo = document.getElementById("photo_box")
    var blob = document.getElementById("blob")

    photo.style.display = "none";
    await sleep(5);

    video.style.display = "none";
    photo.style.display = "flex";
    blob.style.display = "block";
    
}

main();