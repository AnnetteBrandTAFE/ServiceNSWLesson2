const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question){
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program(){
    // Your Code Goes Here...
    let number = ["1", "3", "5"]
    let userInput1 = await askQuestion("Enter a number between 1-5? : ");
if (userInput1 === "1", "3", "5"){
    console.log("Your number has already been entered");
} else {
    number.push(userInput1);
    console.log("Your number" + userInput1 + "has been entered");
    let number1 = parseInt(userInput1);
    let userInput2 = await askQuestion("Enter a number between 1-5? : ");
    console.log(number)
    }
}

Program().then(() => {
    process.exit(0);
});