const blob = document.getElementById("blob");


function sleep(seconds) {
  seconds = seconds * 1000
  return new Promise(resolve => setTimeout(resolve, seconds));
}



// async function main() {
//   await sleep(6);
//   document.body.onpointermove = event => {
//     const { clientX, clientY } = event;
    
//     blob.animate({
//       left: `${clientX}px`,
//       top: `${clientY}px`
      
//     }, { duration: 4000, fill: "forwards"});
    
//   }
// }


async function main() {
  document.addEventListener('DOMContentLoaded', async () => {
    const blob = document.getElementById('blob');
  
    await sleep(6);
  
    document.body.onpointermove = event => {
      const { clientX, clientY } = event;
  
      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`
        },
        { duration: 4000, fill: 'forwards' }
      );
    };
  });
}

main();