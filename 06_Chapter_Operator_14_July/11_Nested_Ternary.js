let age = 10; // x = 
let Goa_illigibility = age > 18 ? age > 23 ? "drink allowed" : "drink not allowed" : "Goa not allowed";
console.log(Goa_illigibility);


let status_code = 200;
let status = status_code === 400 ? status_code === 201 ? "Success" : "Failed" : "Error";
console.log(status);    

let temp = 30;
let weather = temp > 30 ? temp > 40 ? "Hot" : "Warm" : "Cold";
console.log(weather);   

//write a code or program to get the output  5 x 1 = 5 5 x 2 = 10 5 x 3 = 15 5 x 4 = 20 5 x 5 = 25 5 x 6 = 30 5 x 7 = 35 5 x 8 = 40 5 x 9 = 45 5 x 10 = 50
for (let i = 1; i <= 10; i++) {
    let result = 5 * i;
    console.log(`5 x ${i} = ${result}`);
    }
    //can't we use just result instead of ${result} in the above code? can u suggest a better way to write the above code? 
    // please suggest a better way to write the above code? 

    let k = 100;
    console.log(k++ + ++k + k++ + ++k)
