/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  function sanitize(num) {
    if (typeof num === 'string') {
      num = num.replace(/\s+/g, '');
    }
    return Number(num);
  }
  return sanitize(firstNumber) + sanitize(secondNumber);
};
