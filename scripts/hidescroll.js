function sleep(seconds) {
    seconds = seconds * 1000
    return new Promise(resolve => setTimeout(resolve, seconds));
}


async function main() {
    var interval = 10; // Interval between opacity changes in milliseconds
    var keepScrolling = document.getElementById('keep_scrolling');

    await sleep(8);

    (function() {
        var element = document.getElementById('keep_scrolling');
        var currentOpacity = 0;
        var targetOpacity = 0.5;
        var duration = 2000; // Animation duration in milliseconds
        var interval = 10; // Interval between opacity changes in milliseconds
        var startTime = null;
  
        setTimeout(function animateOpacity() {
          if (!startTime) startTime = Date.now();
          var elapsed = Date.now() - startTime;
          var progress = Math.min(elapsed / duration, 1);
          var opacity = currentOpacity + (targetOpacity - currentOpacity) * progress;
          element.style.opacity = opacity;
  
          if (progress < 1) {
            setTimeout(animateOpacity, interval);
          }
        }, interval);
      })();

    window.addEventListener('scroll', function() {
        
        var scrollThreshold = 0.8 * window.innerHeight; // Set the scroll threshold to 90% of the viewport height

        var opacity = 0.5 - (window.pageYOffset / scrollThreshold);
        keepScrolling.style.opacity = opacity;

        if (window.pageYOffset > scrollThreshold) {
            keepScrolling.style.display = 'none';
        } else {
            keepScrolling.style.display = 'block';
        }
    });
}












main();
