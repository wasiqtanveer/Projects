//targeting buttons-------------------------------------------
let rock = document.querySelector(".options .rock")
let paper = document.querySelector(".options .paper")
let scissor = document.querySelector(".options .scissor")
let options = document.querySelectorAll(".option")
let result = document.querySelector(".status")
let userscore = 0;
let computerscore = 0;



//logic for computer-------------------------------------------


let human = 0;

//logic for animation-------------------------------------------

function animateScoreChange(element) {
    element.classList.add('scoree');
    setTimeout(() => {
        element.classList.remove('scoree');
    }, 200);}


//GAME LOGIC----------------------------------------------------

const play = (value , random)=>
{    
    if(random === 1 && value === 3 || random === 2 && value === 1 || random === 3 && value === 2)
    {
        result.innerText = "Computer won 🤖";

        result.style.backgroundColor = "red";
        result.style.color = "white";
        result.style.borderColor= "white";
        computerscore++
        document.querySelector(".computer .score").innerHTML = computerscore
        animateScoreChange(document.querySelector(".computer .score"));

    }

    else if (random === value)
    {
        result.innerText = "It was a Draw 🤝"
        result.style.backgroundColor = "#387F39";
        result.style.color = "#F6E96B";
        result.style.borderColor= "#F6E96B";
    }

    else
    {
        result.innerText = "You Won 💪🎉"
        result.style.backgroundColor = "#F6E96B";
        result.style.color = "#387F39";
        result.style.borderColor= "#387F39";
        userscore++;
        document.querySelector(".human .score").innerHTML = userscore
        animateScoreChange(document.querySelector(".human.score"));
    }
}

// event listeners-------------------------------------------

options.forEach((option) =>
{
    option.addEventListener("click" , ()=>
    {
        if(option.innerText === "✊")
        {
            human = 1;   
        }

        else if(option.innerText === "✋")
        {
            human = 2;   
        }

        else if(option.innerText === "✌")
        {
            human = 3;   
        }
        let random = Math.ceil(Math.random()*3)
        play(human , random);
    })
})



// const disableOptions = () => {
//     options.forEach(option => {
//         option.style.pointerEvents = "none"; // Prevents any click events
//         option.style.opacity = "0.5"; // Visual indication that it's disabled
//     });
// };

// if(human != 0)
// {
//     options.disabled = true;
// }



