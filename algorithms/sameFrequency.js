/**
 * Write a function called sameFrequency.
 * Given two positive integers, find out if the
 * two numbers have the same frequency of digits.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 * Sample Input: (182, 281) => true
 * Sample Output: true
 * Sample Input: (34, 14) => false
 * Sample Output: false
 * Sample Input: (3589578, 5879385) => true
 * Sample Output: true
 * Sample Input: (22, 222) => false
 * Sample Output: false
 */
function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
