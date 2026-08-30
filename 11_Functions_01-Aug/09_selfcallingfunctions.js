(function() {
    console.log("This is a self-calling function");
})
();


(function() {
    console.log("This is a self-calling function with parameters");
    let a = 10;
    let b = 20;
    console.log(a + b);
    })();


    (function() { 
        console.log(" Hello World");
    })
    ();
    