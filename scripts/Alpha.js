// function play(){
//  const homeSection = document.getElementById('home-screen');
//  homeSection.classList.add('hidden');
// //  console.log(homeSection);


// const playgroundSection = document.getElementById('play-ground');
// playgroundSection.classList.remove('hidden');
// // console.log(playgroundSection.classList);
// }

function continueGame(){
   const alphabet = getARandomAlphabet();
   console.log('your random alphabet', alphabet);


   const currentlAphabetElement = document.getElementById('current-alphabet');
   currentlAphabetElement.innerText = alphabet;

   setElementById(alphabet);
}


function play(){
  hiddenElementById('home-screen');
  showElementById('play-ground');
  continueGame()
}