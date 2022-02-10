const fs = require('fs');

// fs.writeFileSync('kundan.js', "Hello Kundan How are You !!")

// console.log('welcome to nide js');

fs.writeFileSync('kundan.js', "Go gowa nsjhfd sdjfbbfd jh Hello Kundan How are You !! 😁", "utf-8")

const test = fs.readFileSync('kundan.js');

const hello = test.toString();

console.log(hello);


// fs.renameSync('kundan.js', "hello.txt"); 