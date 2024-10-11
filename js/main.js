const text = "Hi! I'm Ibrahim, a Angular.js Developer based in Cairo."
let textDiv = document.querySelector('.desc')
let index=0;
function typeAnimation(){
    if(index < text.length){
        textDiv.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeAnimation,100);
    }

}
setTimeout(typeAnimation,1000)
    
//   // Select the magic button
//   const magicButton = document.querySelector('.magic-button');

//   // Function to adjust spin speed
//   function adjustSpinSpeed(speed) {
//     magicButton.style.setProperty('--spin-speed', `${speed}s`);
//   }

//   // Example: Increase spin speed after a click event
//   magicButton.addEventListener('click', function () {
//     adjustSpinSpeed(5); // Change the speed to 3 seconds (faster)
//   });
