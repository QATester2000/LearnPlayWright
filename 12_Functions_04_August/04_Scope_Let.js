let a = 10;

function myFunction() {
    let a = 20;
    console.log(a);
    if (true) { 
       let a = 30;
       console.log(a); // Output: 30
    }
    console.log(a); // Output: 30
}


myFunction();
console.log(a); // Output: 10