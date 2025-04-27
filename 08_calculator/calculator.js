const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((sum, currentNum) => add(sum, currentNum), 0);
};

const multiply = function(array) {
  return array.reduce((product, currentNum) => product * currentNum, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	return Array.from(new Array(num), (x, i) => i + 1)
        .reduce((product, currentNum) => product * currentNum, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
