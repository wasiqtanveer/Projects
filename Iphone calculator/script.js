const display = document.querySelector("input")

function appendtoDisplay(input)
{
    display.value += input;
}


function clearall()
{
    display.value = "";
}


function calculate()
{
    try
    {
        display.value = eval(display.value)
    }

    catch(error)
    {
        display.value = "⚠Error⚠"
    }
}


function backspace()
{
    display.value = display.value.slice(0, -1);
}



