let fruit = ["Banana", "Mango", "Pom", "Kajhu"];
fruit.sort(); // sort the array in ascending order
console.log(fruit); // Output: ["Banana", "Mango", "Pom"]   // sorting 

let scores = [40, 100, 1, 5, 25, 10,-1];
scores.sort(); // sort the array in ascending order
console.log(scores); // Output: [-1, 1, 5, 10, 25, 40, 100
// 
//  ]   // sorting numbers in ascending order 

scores.sort((a, b) => a - b); // sort the array in ascending order
console.log(scores); // Output: [-1, 1, 5, 10, 25, 40, 100]   // sorting numbers in ascending order 
//this is the laziest way of comparing numbers in ascending order. The arrow function takes two parameters a and b, and returns the difference between them. If the result is negative, a is sorted before b. If the result is positive, b is sorted before a. If the result is zero, the order of a and b remains unchanged.
