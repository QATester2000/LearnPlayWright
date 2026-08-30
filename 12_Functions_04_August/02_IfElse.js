function status(score) {
    if (score >=100 && score <300) return "Pass";
    if (score >300 && score < 500) return "Fail";
    if (score < 500) return "Invalid";
}

status(200); // Output: Pass
status(400); // Output: Fail
console.log(status(600));    // Output: Invalid


function mystatus(yourscore) {
    if (yourscore > 100 && yourscore < 300) return "Pass";
    else if (yourscore > 300 && yourscore < 500) {
        return "Fail"; 
    }
    else
    return "Invalid";
    
}

jj = mystatus(99);
console.log(jj); // Output: Invalid