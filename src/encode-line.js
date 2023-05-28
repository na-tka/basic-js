const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1;
  const arrFromStr = str.split('');
  const result = [];

  arrFromStr.forEach((el, ind, arr) => {
    if (arr[ind] === arr[ind + 1]) {
      counter = counter + 1;
    } else {
      result.push(counter > 1 ? counter : '', arr[ind]);
      counter = 1;
    }
  })
  return result.join('');
}

module.exports = {
  encodeLine
};
