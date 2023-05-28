const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== 'string') {
    String(str);
  }
  if (typeof options.addition !== 'string') {
    String(options.addition);
  }

  if (options.repeatTimes > 1 && !options.separator) {
    options.separator = '+';
  }

  if (options.addition === undefined) {
    options.addition = '';
  }

  if (!options.additionSeparator && options.additionRepeatTimes > 1) {
    options.additionSeparator = '|';
  }

  let strWithSeparator = '';
  const strPart = str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition

  for (let i = 0; i < options.repeatTimes - 1; i++) {
    strWithSeparator += strPart + options.separator;
  }

  strWithSeparator += strPart;

  return strWithSeparator;
}

module.exports = {
  repeater
};
