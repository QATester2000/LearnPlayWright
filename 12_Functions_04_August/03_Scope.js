var a = 10;

function myFunction() {
    var a = 20;
    console.log(a);
    if (true) { 
       var a = 30;
       console.log(a); // Output: 30
    }
    console.log(a); // Output: 30
}


myFunction();
console.log(a); // Output: 10