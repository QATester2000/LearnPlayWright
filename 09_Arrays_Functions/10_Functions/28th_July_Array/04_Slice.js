let fruit = ["Banana", "Mango", "Pom"];
let slicedFruit = fruit.slice(1, 3); // slice the array from index 1 to index 3 (not including index 3)
console.log(slicedFruit); // Output: ["Mango", "Pom"]   
let slicedFruit2 = fruit.slice(0);   // slice the array from index 0 to index 2 (not including index 2)
console.log(slicedFruit2); // Output: ["Pom"]
    

// slide returns new array and does not modify the original array.
// last argument which is 3 , you habe to consuder n-1


let score = [10, 20, 30, 40, 50];
console.log(score.every((value) => value > 5)); // Output: true
console.log(score.some((value) => value > 5)); // Output: true