//Defining new variable
const inputSize = document.querySelector('#input-size')
const display = document.querySelector('#display')
const inputColor = document.querySelector('#input-color')
const inputBgColor = document.querySelector('#input-bg-color')
const showSize = document.querySelector('#show-size')
const showColor = document.querySelector('#show-color')
const selectFont = document.querySelector('#select-font')
const showFont = document.querySelector('#show-font')
const enterText = document.querySelector('#enter-text')

//Define a function
function handleInput() {
    // console.log(inputSize.value)
    display.style.fontSize = inputSize.value + 'px'
    display.style.color = inputColor.value 
    display.style.backgroundColor = inputBgColor.value
    display.style.fontFamily = selectFont.value
   
    inputBgColor.innerHTML = inputBgColor
    display.innerHTML = enterText.value
    showSize.innerHTML = inputSize.value
    showColor.innerHTML = inputColor.value
    showFont.innerHTML = selectFont.value

}

//Adding Event listener
inputSize.addEventListener('input', handleInput)

//Event Listener for color
inputColor.addEventListener('input', handleInput)

//Event Listener for bg-color
inputBgColor.addEventListener('input', handleInput)

//add event listener for font selector, enter text, use handle input function
selectFont.addEventListener('input', handleInput)

enterText.addEventListener('input', handleInput)
