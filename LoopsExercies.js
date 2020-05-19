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
    //Loops
    //Do the following for both for and while loops
    
    //For Loops
    // Q1 Write a console app that writes the numbers from 1 to 7 to the console

    // for (let i = 1; i <= 7; i++) {
    //     console.log(i);
    // }
    //Output
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7

    // Q2 Write a console app that writes even numbers from 2 to 8 (inclusive) to 
    // the console (hint, you will need to not use the increment operator)

    // for (let i = 2; i <= 8; i+= 2) {
    //     console.log(i);
    //  }
    //  //Output
    //  2
    //  4
    //  6
    //  8
 
    // Q3 Write a console app that prints the elements of an array in reverse.

    // let myArray = ["Item1", "Item2", "Item3"];
    // for (let i = myArray.length - 1; i >= 0; i--) {
    //       console.log(myArray[i]);
    //   }
    // Output:
    // Item3
    // Item2
    // Item1

    // Q4 Write a console app that prints the elements of an array that begin with the letter a 
    // (hint, a string is an array of characters so you can access the first character the same 
    //way you would access the first element in an array)

//     let myArray = ["Apple", "Banana", "Orange", "Andrew", "Bob", "Steve"];
//    for (let i = 0; i < myArray.length; i++) {
//       let currentElement = myArray[i];
//        if(currentElement[0] == "A"){
//            console.log(currentElement);
//        }
//     }
//     Output:
//     Apple
//     Andrew

    //While Loops
    // Q1 Write a console app that writes the numbers from 1 to 7 to the console

    // let i = 1;
    // while(i <= 7) {
    //     console.log(i);
    //     i++;
    //  }
    // Output:
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7

    // Q2 Write a console app that writes even numbers from 2 to 8 (inclusive) to 
    // the console (hint, you will need to not use the increment operator)

    // let i = 2;
    // while (i <= 8) {
    //     console.log(i);
    //     i += 2;
    // }
    // Output:
    // 2
    // 4
    // 6
    // 8

    // Q3 Write a console app that prints the elements of an array in reverse.

//     let myArray = ["Item1", "Item2", "Item3"];
//     let i = myArray.length - 1;
//      while(i >= 0){        
// console.log(myArray[i]);
//          i--;
//      }
//     Output:
//     Item3
//     Item2
//     Item1

    // Q4 Write a console app that prints the elements of an array that begin with the letter a 
    // (hint, a string is an array of characters so you can access the first character the same 
    //way you would access the first element in an array)

    let myArray = ["Apple", "Banana", "Orange", "Andrew", "Bob", "Steve"];
    let i = 0;
     while (i < myArray.length) {
         let currentElement = myArray[i];
         if(currentElement[0] == "A"){
             console.log(currentElement);
         }
         i++;
     }
    // Output:
    // Apple
    // Andrew
}
Program().then(() => {
    process.exit(0);
});
