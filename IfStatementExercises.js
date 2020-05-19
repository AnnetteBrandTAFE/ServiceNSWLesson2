
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

   // If Statements

   // Q1 Write a console app that takes 2 numbers entered by the user and prints the larger number 
   // to the console

//    let userInput1 = await askQuestion("Enter the first number: ");
//    let number1 = parseInt(userInput1);
//    let userInput2 = await askQuestion("Enter the second number: ");
//    let number2 = parseInt(userInput2);
//    if (number1 > number2) {
//        console.log(number1);
//    } else {
//        console.log(number2);
//    } 

//    Output:
//    Enter the first number: 10
//    Enter the second number: 50
//    50

    // Q2 Write a console app that takes 2 numbers entered by the user and prints them to the console 
    // in order from largest to smallest

    // let userInput1 = await askQuestion("Enter the first number: ");
    // let number1 = parseInt(userInput1);
    // let userInput2 = await askQuestion("Enter the second number: ");
    // let number2 = parseInt(userInput2);
    // if (number1 > number2) {
    //     console.log(number1);
    //     console.log(number2);
    // } else {
    //     console.log(number2);
    //     console.log(number1);
    // }

    // Output:
    // Enter the first number: 10
    // Enter the second number: 50
    // 50
    // 10

   // Q3 Same as 2 but from smallest to largest.   

   let userInput1 = await askQuestion("Enter the first number: ");
   let number1 = parseInt(userInput1);
   let userInput2 = await askQuestion("Enter the second number: ");
   let number2 = parseInt(userInput2);
   if (number1 < number2) {
       console.log(number1);
       console.log(number2);
   } else {
       console.log(number2);
       console.log(number1);
   }
//    Output
//    Enter the first number: 10
//    Enter the second number: 50
//    10
//    50   


}

Program().then(() => {
    process.exit(0);
});