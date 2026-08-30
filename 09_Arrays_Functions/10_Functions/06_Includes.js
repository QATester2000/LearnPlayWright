let result = ["Banana", "Mango", "Pom"];
console.log(result.includes("Mango")) ;

let nums = [1,2,3,4,5,11,7,8,9];
let result2 = nums.find(x => x > 5); // x is a parameter that represents each element in the array. The arrow function checks if the element is greater than 5. The find() method returns the first element that satisfies the condition, which is 11 in this case.
console.log(result2);
let result3 = nums.findIndex(x => x > 5); // arrow function checks if the element is greater than 5. The findIndex() method returns the index of the first element that satisfies the condition, which is 5 in this case.
console.log(result3);