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

// Daily Challenge

// Write a console app that takes strings from the user and adds them to an array until the user 
// enters a duplicate entry. Then stop accepting user input and print each element in the array 
//to the console

let myArray = [];
let shouldLoop = true;
while(shouldLoop){
    let userInput = await askQuestion("Please enter a number: ");
    for(let i = 0; i < myArray.length; i++){
        if(userInput == myArray[i]){
            shouldLoop = false;
        }
    }
    if (shouldLoop) {
        myArray.push(userInput);
    }
}

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
// Output:
// Please enter a number: 1
// Please enter a number: 2
// Please enter a number: 1
// 1
// 2

}

Program().then(() => {
    process.exit(0);
});