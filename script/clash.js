// ----------store script---------
function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden');
}
function removeElementById(sectionId){
    const section = document.getElementById(sectionId)
    section.classList.remove('hidden')
}
function genarateAAlphabate(){
    const alfaStr = 'abcdefghijklmnopqrstuvwxyz';
    const alfa = alfaStr.split('');
    const randomNum = Math.random() * 25;
    const index = Math.round(randomNum);
    const alpha = alfa[index]
    // return alpha
    console.log(alpha)
}

function continueGame(){
    const newNum = genarateAAlphabate()
    // const newValue = document.getElementById(tNum)
    // newValue.innerText === newNum
    
} 


//------- main script----
function play(){
    hideElementById('game-join');
    removeElementById('game-play');
    continueGame();
    
}








// function play(){
//     const startPlay = document.getElementById('game-join')
//     startPlay.classList.add('hidden')
//     const gamePlay = document.getElementById('game-play')
//     gamePlay.classList.remove('hidden')
// }