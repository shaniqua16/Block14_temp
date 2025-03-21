// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "11,12,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/** // TODO
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) 
{ 
   let count= 0 
for ( let i = 0; i < numbers.length; i++){ 
  count ++
 }
  return count}



/** // TODO
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) 
{
  let NumSum = 0
  
  for (let i = 0; i < numbers.length; i++) {
    NumSum += numbers[i]; 
  } 
console.log (getSum.numbers)
}




/** // TODO
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  let mean =0
  for(let i = 0; i < numbers.length; i++) {
    mean += numbers [i] / numbers.length;
  }
  console.log(Math.floor(getMean.number))
}



// TODO
/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
*/
function getMin(numbers) {
  let min = numbers [0]
  for(let i = 1; i < numbers.length; i++){ 
    if (numbers[i] < min){
      min = numbers[i]
    }
  }
  console.log(Math.min(getMin.number))
}




/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
 
  let max= -Infinity
  for (let i= 0; i < numbers.length; i++){
    if (numbers[i] > max) { max = numbers[i]}
  }
  }
  
  



/** // TODO
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */ 



function getRange(number) {
  let range = []
  for (let i = 0; i < number.length; i++){
    range.push (i)
  }
 return range
}






/** // TODO
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  let even = numbers.filter (number => number % 2 === 0);
  
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {

  let odd = numbers.filter (number => number % 2 !== 0);
  
  // TODO
}
