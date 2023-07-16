function sleep(seconds) {
    seconds = seconds * 1000
    return new Promise(resolve => setTimeout(resolve, seconds));
}


async function main() {
    var img = document.getElementById('tilt_img');
    var container = document.querySelector('body'); // Replace 'body' with the container element that holds the image

    var maxDistance = 700; // Adjust the value to control the maximum distance to trigger the tilt effect

    await sleep(7);

    container.addEventListener('mousemove', function(e) {
    var x = e.clientX - container.offsetLeft;
    var y = e.clientY - container.offsetTop;
    var centerX = container.offsetWidth / 2;
    var centerY = container.offsetHeight / 2;
    var deltaX = x - centerX;
    var deltaY = y - centerY;
    var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance <= maxDistance) {
        var percentX = deltaX / centerX;
        var percentY = deltaY / centerY;
        var maxTilt = 10; // Adjust the value to control the maximum tilt angle

        var tiltX = percentY * maxTilt;
        var tiltY = -percentX * maxTilt;

        img.style.transform = 'perspective(1000px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg)';
    } else {
        img.style.transform = 'none';
    }
    });

    container.addEventListener('mouseleave', function() {
    img.style.transform = 'none';
    });
}

main();