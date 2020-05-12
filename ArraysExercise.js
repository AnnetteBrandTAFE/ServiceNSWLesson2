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
    let drinks = ["Vodka", "Jack Daniels", "Carona"];

    let userInput1 = await askQuestion("What is your favourite drink? : ");
    drinks.push(userInput1);
    console.log(drinks);

}

Program().then(() => {
    process.exit(0);
});