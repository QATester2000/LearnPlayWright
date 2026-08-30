// let a = [1,2,3,4,5];
// let b = [6,7,8,9,10];


// console.log(...a); // using spread operator to print the elements of array a
// console.log(...b); // using spread operator to print the elements of array b
// let c = [...a,...b]; // using spread operator to concatenate two arrays
// console.log(c); // Output: [1,2,3,4,5,6,7,8,9,10]

function haserror(...arugs) { // using rest operator to accept any number of arguments
    return arugs.some(s => s > 5); // Output: true
}

let result = [1,2,3,4,5];
haserror(...result); // using spread operator to pass the elements of array result as arguments to the function haserror    