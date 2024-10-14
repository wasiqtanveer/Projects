const display = document.querySelector(".display input")

const weight  = document.querySelector("#weight")
const height  = document.querySelector("#height")

function calculate()
{
    display.value = Number(weight.value)/(((Number(height.value))/100)**2)
    
    
}
