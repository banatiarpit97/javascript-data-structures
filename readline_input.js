var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);
var input = [];
// rl.question('enter data ', (data) => {    //ask for input, input is stored in the parameter passed to the callback function
//     input.push(data);
//     rl.setPrompt('enter data again ');      //set a prompt to ask a question after first question is answered
//     rl.prompt();                                 //display the set prompt

//     rl.on('line', (data) => {                      //will be fires when input or answer is given to the prompt
//         input.push(data);   
//         rl.setPrompt('enter data again and again');    //will ask for data in a loop until rl.close() is called
//         rl.prompt(); 
//         if(input.length == 4){                           //assuming we want 4 inputs
//             rl.close();                                  //will close the listening for input
//         }
//     })
// })

rl.question('Please enter the first number : ', (answer1) => {
    rl.question('Please enter the second number : ', (answer2) => {
        var result = (+answer1) + (+answer2);
        console.log(`The sum of above two numbers is ${result}`);
        rl.close();
    });
});



rl.on('close', () => {                              //will be fired when rl.close() is used
    console.log(input);
    console.log(input)                 //this is where main logic of the program is performed after taking input
    process.stdout.write(`your data is ${input}`)  //unlike console.log(this.does not create new line character) before or after the output
})