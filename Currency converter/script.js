const currURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"

const dropdown = document.querySelectorAll(".selection select");

const amount = document.querySelector(".amount input")

const button = document.querySelector("button")

const result = document.querySelector(".value")

const from = document.querySelector(".from select")

const to = document.querySelector(".to select")

//logic for select
for(let select of dropdown)
{
    for(code in countryList)
        {
            let newoption = document.createElement("option")
            newoption.innerText = code
            newoption.value = code
            
            
            if(select.name === "from"  && code ==="USD")
            {
                newoption.selected = "selected";
            }

            else if(select.name === "to"  && code ==="PKR")
            {
                newoption.selected = "selected";
            }

            select.append(newoption);  
        }

        select.addEventListener("change" , (evt) =>
        {
            flagChange(evt.target);
        })
}



const flagChange = (element) =>
{
    let currency = element.value;  
    let countrycode = countryList[currency];   
    let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc
}





const update = async() =>
{

    let input = amount.value;
    if(input ==="" || input < 1)
    {
        input = 1
        amount.value = "1"
    }


    const URL = `${currURL}/${from.value.toLowerCase()}.json`
    let response = await fetch(URL)
    let convert = await response.json()
    let rate = convert[from.value.toLowerCase()][to.value.toLowerCase()];
    let finalAmount = input * rate;

    result.innerText = `${finalAmount} ${to.value} `
}

window.addEventListener("load" , () =>
    {
        update()
    })

    
button.addEventListener("click" , (evt) =>
{
    evt.preventDefault();
    update()
})




