let fruit = ["Banana", "Mango", "Pom"];
let newfruit = [...fruit, "Apple", "Grapes"]; // spread operator to add new elements to the array
console.log(newfruit); // Output: ["Banana", "Mango", "Pom", "Apple", "Grapes"]
let kfruit = ["Apple", "Grapes", "Orange"];
let myfruits = [...fruit,...kfruit]; // spread operator to combine two arrays
// ... means all the elements of the array. We are combining the elements of fruit and kfruit into a new array myfruits. 

