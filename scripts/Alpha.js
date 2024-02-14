// function play(){
//  const homeSection = document.getElementById('home-screen');
//  homeSection.classList.add('hidden');
// //  console.log(homeSection);


// const playgroundSection = document.getElementById('play-ground');
// playgroundSection.classList.remove('hidden');
// // console.log(playgroundSection.classList);
// }

// function handleKeyboardButtonPress (){
//     console.log('button pressed');
// }
// document.addEventListener('keyup', handleKeyboardButtonPress);

// function handleKeyboardKeyUpEvent(event){
//    const playPressed = event.key
//    console.log('player pressed', playPressed);

//    const currentlAphabetElement = document.getElementById('current-alphabet');
//    const currentAlphabet = currentlAphabetElement.innerText;
//    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
//    console.log(playPressed, expectedAlphabet);


//    if(playPressed === expectedAlphabet){
//       console.log('you get a point');
//    }
//    else{
//       console.log('you missed. you lost a life');
//    }
// }

function handleKeyboardKeyUpEvent(event){
   const playerPressed = event.key;
   console.log('player pressed', playerPressed);

   if(playerPressed === 'Escape'){
      gameOver();
   }

  const currentlAphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentlAphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  if(playerPressed === expectedAlphabet){
   console.log('you get a point!!');

   const currentScore = getTextElementValueById('current-score');
   const updateScore = currentScore + 1;
   setTextElementValueById('current-score', updateScore);
   // console.log('you have pressed correctly', expectedAlphabet);
    
   // const currentScoreElement = document.getElementById('current-score');
   // const currentScoreText = currentScoreElement.innerText;
   // const currentScore = parseInt(currentScoreText);
   // console.log(currentScore);

   // const currentScore = getTextElementValueById('current-score');

   // const newScore = currentScore + 1;

   // currentScoreElement.innerText = newScore;

   removeBagById(expectedAlphabet);
   continueGame();
  }
  else{
   console.log('you missed. you lost a life');

   const currentLife = getTextElementValueById('current-life');
   const updateLife = currentLife - 1;
   setTextElementValueById('current-life', updateLife);


   if(updateLife === 0){
      gameOver();
   }

   // const currentLifeElement = document.getElementById('current-life');
   // const currentLifeText = currentLifeElement.innerText;
   // const currentLife = parseInt(currentLifeText);

   // const newLife = currentLife - 1;
   // currentLifeElement.innerText = newLife;
  }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function continueGame(){
   const alphabet = getARandomAlphabet();
   // console.log('your random alphabet', alphabet);


   const currentlAphabetElement = document.getElementById('current-alphabet');
   currentlAphabetElement.innerText = alphabet;

   setElementById(alphabet);
}


function play(){
  hiddenElementById('home-screen');
  hiddenElementById('score');
  showElementById('play-ground');

  setTextElementValueById('current-life', 5);
  setTextElementValueById('current-score',0);
  continueGame()
}

function gameOver(){
   hiddenElementById('play-ground');
   showElementById('score');

   const lastScore = getTextElementValueById('current-score');
   console.log(lastScore);
   setTextElementValueById('final-score', lastScore);


   const currentAlphabet = getElementTextById('current-alphabet')
   removeBagById(currentAlphabet);
}