//Defining new variables
const inputSize = document.querySelector('#input-size')
const showSize = document.querySelector('#show-size')
const display = document.querySelector('#display')
const inputColor = document.querySelector('#input-color')
const showColor = document.querySelector('#show-color')
const selectFont = document.querySelector('#select-font')
const showFont = document.querySelector('#show-font')
const enterText = document.querySelector('#enter-text')
const showBgColor = document.querySelector('#show-bg-color')
const inputBgColor = document.querySelector('#input-bg-color')

//Define a function
function handleInput() {
    //Font Size--------------------------------------->
    display.style.fontSize = inputSize.value + 'px'
    showSize.innerHTML = inputSize.value
    
    //Font-------------------------------------------->
    display.style.fontFamily = selectFont.value
    showFont.innerHTML = selectFont.value
    
    //Color------------------------------------------->
    showColor.innerHTML = inputColor.value
    display.style.color = inputColor.value 
   
    //Enter Text-------------------------------------->
    display.innerHTML = enterText.value

    //Background color-------------------------------->
    inputBgColor.innerHTML = inputBgColor
    display.style.backgroundColor = inputBgColor.value
    showBgColor.innerHTML = inputBgColor.value
}

//Event listener for input size---------------------------------->
inputSize.addEventListener('input', handleInput)

//Event Listener for color--------------------------------------->
inputColor.addEventListener('input', handleInput)

//Event Listener for bg-color------------------------------------>
inputBgColor.addEventListener('input', handleInput)

//Event Listener for Font---------------------------------------->
selectFont.addEventListener('input', handleInput)

//Event Listener for enter text---------------------------------->
enterText.addEventListener('input', handleInput)




