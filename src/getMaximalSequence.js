/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let maxCount = 1;
  let currentCount = 1;
  let element = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentCount++;
      if (currentCount > maxCount) {
        maxCount = currentCount;
        element = arr[i];
      }
    } else {
      currentCount = 1;
    }
  }
  return Array(maxCount).fill(element);
};
