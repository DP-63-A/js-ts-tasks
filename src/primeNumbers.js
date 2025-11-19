/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function (fromNumber, toNumber) {
    const primes = [];
    const start = Math.max(fromNumber, 2);
    const end = Math.min(toNumber, highestNumber);
    for (let num = start; num <= end; num++) {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primes.push(num);
    }
    return primes;
  };
};
