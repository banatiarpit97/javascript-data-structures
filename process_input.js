var a;
process.stdin.on('data', (data) => {  //take input, input string will be stored in parameter passed to callback function
    a = data;
    process.stdout.write(data);       //to print values
    process.exit();                   //to exit the listening process
})

process.on('exit', () => {            //will run when listening is ended
    process.stdout.write(a);      //this is where the logic of program after taking input is performed
})

process.stdout.write('hh2');          // will be outputted before the input
