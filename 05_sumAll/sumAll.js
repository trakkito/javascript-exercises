const sumAll = function(numOne, numTwo) {
    if (numOne || numTwo < 0) return "ERROR";
    if (numOne || numTwo === NaN) return "ERROR";
    let start = Math.min(numOne, numTwo);
    let end = Math.max(numOne, numTwo);
    let finalSum = 0;
    for (let i = start; i <= end; i++) {
        finalSum += i;
    }

    return finalSum;
};

console.log(sumAll(32, "Hi"))

// Do not edit below this line
module.exports = sumAll;
