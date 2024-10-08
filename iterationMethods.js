//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
const numsGreaterThanOrEqual25 = numbers.filter((num) => num >= 25);
console.log(numsGreaterThanOrEqual25);

const numsDivBy5 = numbers.filter((num) => !(num % 5));
console.log(numsDivBy5);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/

const numsSquared = numbers.map((num) => num ** 2);
console.log(numsSquared);

const numsMulBy2 = numbers.map((num) => num * 2);
console.log(numsMulBy2);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
const numsGreaterThanOrEqual20Squared = numbers.filter((num) => num >= 20).map((num) => num ** 2);
console.log(numsGreaterThanOrEqual20Squared);

const numsDivBy5MulBy3 = numbers.filter((num) => !(num % 5)).map((num) => num * 3);
console.log(numsDivBy5MulBy3);

/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = (array) => array.forEach((el) => console.log(el));

logger([1, 2, 3, 'apple', 'orange']);

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = (temperatures) => temperatures.map((temperature) => (temperature - 32) * (5 / 9));

console.log(toCelsius([68, 77, 86]));

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/

hottestDays = (temperatures, threshhold) => temperatures.filter((temperature) => temperature > threshhold);

console.log(hottestDays([20, 24, 80, 32, 10, 43, 49, 28], 29));

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
logHottestDays = (temperatures, threshhold) => logger(toCelsius(hottestDays(temperatures, threshhold)));

logHottestDays([68, 77, 86], 70);
