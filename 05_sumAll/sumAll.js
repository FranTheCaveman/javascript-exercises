const sumAll = function(num1, num2) {
    // Check parameters
    const argsArray = Array.from(arguments); 
    if ((argsArray.some(num => num < 0)) ||
        (argsArray.some(num => !Number.isInteger(num)))) {
        return "ERROR";
    }

    // regardless of argument size order, it will sum between them appropriately
    const min = Math.min(...argsArray); // spread operator (...) would remove square brackets, ex. Math.min([1,2]) <-wrong
    const max = Math.max(...argsArray); 
    let sum = 0;

    // sum every integer between num1 and num2
    for (let i = min; i <= max; i++) {
        sum += i; 
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
