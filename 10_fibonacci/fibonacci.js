const fibonacci = function(num) {
    if (num < 0) return "OOPS";

    let fibonacciNums = [0,1];

    for (let i=1; i<num; i++) {
        fibonacciNums.push(fibonacciNums[i-1] + fibonacciNums[i]);
    }

    return fibonacciNums[num];
};

// Do not edit below this line
module.exports = fibonacci;
