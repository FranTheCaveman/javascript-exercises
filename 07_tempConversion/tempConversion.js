function round(value, numDecimalDigits) {
  var rounder = Math.pow(10, numDecimalDigits);
  return +(Math.round(value * rounder) / rounder).toFixed(numDecimalDigits);
}

const convertToCelsius = function(temperature) {
  return round((temperature - 32) * (5/9), 1);
};

const convertToFahrenheit = function(temperature) {
  return round((temperature * (9/5)) + 32, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
