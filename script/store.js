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
    return alpha
}
function setAlphabetId(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}
function removeAlphabetId(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId)
    const elementValue = parseInt(element.innerText)
    return elementValue
}
function SetTextElementValueById(elementId , value){
    const element = document.getElementById(elementId)
    element.innerText = value;
}