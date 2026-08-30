let scores = [10, 20, 30, 40, 50];
let doubledScores = scores.map(x => x * 2);  //map transforms every element of the array & gives new array.

console.log(doubledScores);

let sArray = scores.map(k=>k>30?"Pass":"Fail"); //map transforms every element of the array & gives new array.
console.log(sArray);
let sArray2 = scores.filter(n=> n>9);
console.log(sArray2); //filter transforms every element of the array & gives new array.

let kArray = scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);  // 0 value is assigned to accumulator. reduce transforms every element of the array & gives new array.
//reduce transforms every element of the array & gives new array.
console.log(kArray);
