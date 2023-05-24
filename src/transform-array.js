const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  if (arr.length === 0) {
    return [];
  }
  const sequences = ['--discard-prev', '--discard-next', '--double-prev', '--double-next'];
  const transformedArr = [...arr];

  arr.forEach((el, ind) => {
    if (el === '--discard-next' && el !== arr[arr.length - 1]) {
      transformedArr.splice(ind + 1, 1);
    }
    if (el === '--discard-prev' && ind !== 0) {
      transformedArr.splice(ind - 1, 1);
    }
    if (el === '--double-prev' && ind !== 0) {
      transformedArr.splice(ind - 1, 0, transformedArr[ind - 1]);
    }
    if (el === '--double-next' && el !== arr[arr.length - 1]) {
      transformedArr.splice(ind, 1, transformedArr[ind + 1]);
    }
  })

  return transformedArr.filter(el => !sequences.includes(el));
}
module.exports = {
  transform
};