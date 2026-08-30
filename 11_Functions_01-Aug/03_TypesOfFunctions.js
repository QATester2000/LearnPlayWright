// No Arguments and no Return Value
function greet() {
    console.log("Hello, World!");
}   

greet(); // Output: Hello, World!

// Return Type and no Arguments
function getGreeting() {
    return "Hello, World!";
}

console.log(getGreeting()); // Output: Hello, World!
let output = greet();
console.log(output); // Output: Hello, World!

// No Return Type and Arguments
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}   

greetUser("Alice"); // Output: Hello, Alice

//  Return Type and Arguments

function getUserGreeting(name) {
    return `Hello, ${name}!`;
}   

let userGreeting = getUserGreeting("Bob");
console.log(userGreeting); // Output: Hello, Bob!


function myscore(Ketanscore) {
    return (`my score is ${Ketanscore}`); 
}

let myscore1 = myscore(70);
console.log(myscore1); // Output: my score is 70