function GetScore(score) {
    return score > 50 ?"Pass" : "Fail";
}

let myScore = GetScore(70);
let yourscore = GetScore(30);

console.log(myScore); // Output: Pass
console.log(yourscore); // Output: Fail
