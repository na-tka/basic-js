const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function getSumOfDigits(n) {
  function getArrayFromNumber() {
    return Array.from(String(n), Number);
  }

  n = getArrayFromNumber();

  function recursion() {
    if (n.length > 1) {
      n = n.reduce((acc, curr) => acc + curr, 0);
      n = getArrayFromNumber();
      recursion();
    }
  }
  recursion();
  return +n.join('');
}

module.exports = {
  getSumOfDigits
};
