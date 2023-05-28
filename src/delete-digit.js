const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = [];
  let arrayOfDigits = n.toString().split('');

  for (let i = 0; i < arrayOfDigits.length; i++) {
    let temp = [...arrayOfDigits];
    temp.splice(i, 1);
    result.push(temp)
  }

  result = result.map(el => +el.join(''));
  return Math.max(...result);
}

module.exports = {
  deleteDigit
};
