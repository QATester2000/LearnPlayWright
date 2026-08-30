function validateScore(score) {
    if (score > 100 || score < 0) {
        console.log("Invalid score");
    }
}

const validatescore1 = function(scores) {
    if (scores > 100 || scores < 0) {
        console.log("Invalid score");
    }
}

validateScore(120); // Output: Invalid score
validatescore1(120); // Output: Invalid score
