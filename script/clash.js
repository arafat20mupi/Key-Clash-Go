function handleKeyboardKeyUpEvent(e){
    const playerPress = e.key
    if(playerPress === 'Escape'){
        gameOver()
    }
    // console.log(playerPress)
    const newValue = document.getElementById('tNum')
    const userValue = newValue.innerText
    const lowercaseAlpha = userValue.toLowerCase()
    // console.log(playerPress , lowercaseAlpha)
    if(playerPress === lowercaseAlpha){
        
        const carentScoreElement = getTextElementValueById('carentScore')
        const carentScore = carentScoreElement + 1 
        SetTextElementValueById('carentScore', carentScore)
        // const carentScoreElement = document.getElementById('carentScore')
        // const carentScore = carentScoreElement.innerText
        // const newScore = parseInt(carentScore) + 1
        // carentScoreElement.innerText = newScore
        removeAlphabetId(lowercaseAlpha)
        continueGame()
    }
    else{
        const carentLife =getTextElementValueById('carentLife')
        const updateLife =carentLife - 1
        SetTextElementValueById('carentLife', updateLife)
        if (updateLife === 0) {
            alert('Game Over')
            gameOver()
        }


        // const carentLifeElement = document.getElementById('carentLife')
        // const carentLife = carentLifeElement.innerText
        // const newLife = parseInt(carentLife) - 1
        // carentLifeElement.innerText = newLife

    }
}
document.addEventListener( "keyup", handleKeyboardKeyUpEvent)






function continueGame(){
    const newNum = genarateAAlphabate()
    const newValue = document.getElementById("tNum")
    newValue.innerText = newNum
    setAlphabetId(newNum)
}
//------- main script----
function play(){
    hideElementById('game-join');
    hideElementById('scoreSection')
    removeElementById('game-play');
    SetTextElementValueById('carentLife' , 5)
    SetTextElementValueById('carentScore' , 0)
    removeAlphabetId('')
    continueGame();  
}
function gameOver(){
    hideElementById('game-play');
    removeElementById('scoreSection');
    const lastScore = getTextElementValueById('carentScore')
    SetTextElementValueById('finalScore' , lastScore)
}

// function play(){
//     const startPlay = document.getElementById('game-join')
//     startPlay.classList.add('hidden')
//     const gamePlay = document.getElementById('game-play')
//     gamePlay.classList.remove('hidden')
// }