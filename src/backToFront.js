/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  if (symbolsCount <= 0 || symbolsCount > str.length) {
    return str;
  }
  if (str.length === 1 && symbolsCount === 1) {
    return str.repeat(3);
  }
  if (symbolsCount === str.length) {
    return str.repeat(symbolsCount);
  }
  const lastChar = str.slice(-1);
  const front = lastChar.repeat(symbolsCount);
  const back = lastChar.repeat(symbolsCount);
  return front + str + back;
};
