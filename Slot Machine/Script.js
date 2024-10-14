const col1 = () => 
    {
    let random = Math.random() * 10;
    return decider(random);
}

const col2 = () => 
    {
    let random = Math.random() * 10;
    return decider(random);
}

const col3 = () => 
    {
    let random = Math.random() * 10;
    return decider(random);
}

const decider = (random) => {
    switch (true) {
        case random <= 1:
            return "🍈";
        case random > 1 && random <= 2:
            return "🍉";
        case random > 2 && random <= 3:
            return "🍊";
        case random > 3 && random <= 4:
            return "🍋";
        case random > 4 && random <= 5:
            return "🍌";
        case random > 5 && random <= 6:
            return "🍍";
        case random > 6 && random <= 7:
            return "🥭";
        case random > 7 && random <= 8:
            return "🍎";
        case random > 8 && random <= 9:
            return "🍏";
        case random > 9 && random <= 9.9:
            return "🍐";
        default:
            return "";
    }
};

let tries = 0;

function start() {
    let result1, result2, result3;
    
    do {
        result1 = col1();
        result2 = col2();
        result3 = col3();
        tries++
        
        console.log(result1 + " " + result2 + " " + result3);

        if (result1 === result2 && result2 === result3) 
            {
            console.log("Won!");
            console.log("You won " + tries*100 + "$🎉💵");
            
            break;  
        } 
        
        else 
        {
            console.log("Better luck next time");
        }
        
    } while (result1 !== result2 || result1 !== result3);
}

start();

console.log(Math.ceil(Math.random()*10));

