let fruit = [];
let browser = ["10" , "20" , "30", "40"];
console.log(browser[0]);
console.log(browser.at(-1));
console.log(browser.length);
console.log(fruit.length);
//browser.push("monkey");
console.log(browser.length);
browser.pop("Mozilla");
console.log(browser.length);
browser.reverse()
console.log(browser[0]);

let sports = new Array ("Cricket","FIFA");
console.log(sports.length);
sports[1] = "Golf";
console.log(sports[1]);

sports.pop();
console.log(sports.length);
sports.shift();

console.log(sports.length);  //to remove first argument from array
let cities = Array.of("44","87","12","34");
console.log(cities.length);
console.log(cities);

//let myname = Array.from("Ketan")
// 

console.log(cities.splice(2,1));
console.log(cities);
//cities.splice(2,0,88,99);
//console.log(cities);