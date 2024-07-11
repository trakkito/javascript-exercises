const convertToCelsius = function(temp) {
  if (isNaN(temp)) return "ERROR";
  let fahrenheit = 32;
  let celsius = (temp-fahrenheit)*5/9;
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  if (isNaN(temp)) return "ERROR";
  let fahrenheit = 32;
  let celsius = (temp*9/5)+fahrenheit;
  return parseFloat(celsius.toFixed(1));
};

console.log(convertToFahrenheit(-10))

console.log(convertToCelsius(-100))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
