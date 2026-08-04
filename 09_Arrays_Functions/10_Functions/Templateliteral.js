function literal(sCatch) {
    let result = sCatch >= 3 ? "Pass" : "Fail"; 
    return `hi. ${result}`;
}

let sVariable = literal(2);
console.log(sVariable);
