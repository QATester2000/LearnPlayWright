function expression(sCatch) {
    console.log(sCatch);
    return "Hello, " + sCatch;
}

const expression1 = function(sCatch2) 
{
    return "Hello, " + sCatch2;
}

svalue1 = expression1("World");
svalue2 = expression1("Playwright");
console.log(svalue1);
console.log(svalue2);

const function1 = function(sCatch3) {
    return "Hello, " + sCatch3;
}


//Arrow function    

const function1 = (argument1) =>  "Hello, " + argument1;

sMessage = function1("World");
console.log(sMessage);


const function2 = (capture2) => "Hello, " + capture2;
sMessage1 = function2("Playwright");
console.log(sMessage1);

