//Arrow function    

const function1 = (argument1) =>  "Hello, " + argument1;

sMessage = function1("World");
console.log(sMessage);


const function2 = (capture2) => "Hello, " + capture2;
sMessage1 = function2("Playwright");
console.log(sMessage1);

const function3 = (capture3) => {
    let result = capture3 >= 3 ? "Pass" : "Fail";
    return `hi. ${result}`;
}
sResult = function3(2);
console.log(sResult);