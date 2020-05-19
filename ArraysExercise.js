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

    //Arrays

    //Write a console app that takes strings from the user and adds them to an array
    let answer = []
    let userInput1 = await askQuestion("Enter the first number: ");
    let number1 = parseInt(userInput1);
    let userInput2 = await askQuestion("Enter the second number: ");
    let number2 = parseInt(userInput2);

    answer.push (number1);
    answer.push (number2);
    
    console.log(answer);

    // Output:
    // Enter the first number: 10
    // Enter the second number: 50
    // [ 10, 50 ]
}

Program().then(() => {
    process.exit(0);
});