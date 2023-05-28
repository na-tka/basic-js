const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Array = s1.split('');
  let s2Array = s2.split('');
  let counter = 0;
  s1Array.forEach(el => {
    if (s2Array.includes(el)) {
      let index = s2Array.indexOf(el);
      s2Array.splice(index, 1);
      counter = counter + 1;
    }
  });
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
