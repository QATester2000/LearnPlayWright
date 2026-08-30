let sArray = new Array(5);
console.log(sArray.length);

let cities = ["New York"];
let NewCities = new Array("Los Angeles", "Chicago", "Houston");
console.log(cities);
console.log(NewCities);

let sports = Array.of("Soccer", "Basketball", "Tennis");
console.log(sports);  
sports.shift()
console.log(sports);

sports.splice(1, 1, "cricket", "Volleyball");
console.log(sports);


let countries = ["USA", "Canada", "Mexico","India","China", "Japan "];
countries.splice(2, 2, "Brazil", "Argentina");
console.log(countries); // Output: ["USA", "Canada", "Japan"]
//countries.splice(2, 2);
