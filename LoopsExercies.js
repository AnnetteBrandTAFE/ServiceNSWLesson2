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
// Question 1
//for (let i = 1; i < 8; i++) {
//    console.log(i);
//}
// Question 2
//for (let i = 2; i < 9; i += 2) {
//   console.log(i);
//}
// Question 3
//let numerals = ['1', "2", "3"];
//console.log (numerals[2] + numberals [1] + numerals[0])
//}

// Question 4
//let students = ["Annette","Evie","Helena","Rosemary","Aunt Mary"];
//for (let i = 0; i < students.length; i ++) {
 //if (students[i].charAt(0) === 'A') {
 //console.log(students[i]);
 //}
}

Program().then(() => {
    process.exit(0);
});
