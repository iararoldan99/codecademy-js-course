// Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

// Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem:
//  All of his forecasts describe the temperature in Kelvin.

// With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

// the forecast today is 293 kelvin

const kelvin = 343;

// celsius is 293 less than kelvin

const celsius = kelvin - 273;

// commentinggg

var fahrenheit = Math.floor(celsius * (9/5) + 32);

var newton = Math.floor(celsius * (33/100));

console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.')

console.log('The temperature is ' + newton + ' degrees newton.')