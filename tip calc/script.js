// javaScript Code written here! 
const display = document.querySelector('#display')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')

console.log(display.innerHTML) // prints the text inside the tags
console.log(billInput.value) // prints the value entered into the input

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)

function calculateTip() {
    const billValue = billInput.value
    const tipValue = tipInput.value
  
    const tipAmount = billValue * tipValue / 100
    
    display.innerHTML = `<strong class='tipamount'>${tipAmount}</strong>`
  
  }
    

calculateTip()
    
