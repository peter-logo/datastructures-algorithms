/**
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero
 * or undefined if a pair does not exist.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 * Sample Input: [-3, -2, -1, 0, 1, 2, 3] => [-3, 3]
 * Sample Output: [-3, 3]
 * Sample Input: [-2, 0, 1, 3] => undefined
 * Sample Output: undefined
 * Sample Input: [1, 2, 3] => undefined
 * Sample Output: undefined
 * Sample Input: [-4, -3, -2, -1, 0, 1, 2, 5] => [-2, 2]
 * Sample Output: [-2, 2]
 */

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]

/**
 * Implement a function called countUniqueValues,
 * which accepts a sorted array, and counts the unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 * Sample Input: [1, 1, 1, 1, 1, 2] => 2
 * Sample Output: 2
 * Sample Input: [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13] => 7
 * Sample Output: 7
 * Sample Input: [] => 0
 * Sample Output: 0
 * Sample Input: [-2, -1, -1, 0, 1] => 4
 * Sample Output: 4
 */

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let count = 1;
  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      count++;
      left = right;
    }
    right++;
  }

  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
