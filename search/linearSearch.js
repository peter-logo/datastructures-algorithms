// A linear search algorithmn returns index of value if found.
// Returns -1 if value is not found.
// Sample Input: [1, 4, 5, 8, 3, 0], 3 => 4
// Sample Input: [0, 3, 5, 8, 9], 2 => -1
// Time Complexity: O(N)
// Space Complexity: S(1)

/**
 * A linear search algorithmn returns index of value if found.
 * @param {Array<number>} arr
 * @param {number} val
 * @returns {number}
 */
function linearSearch(arr, val) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] !== val) continue;
  //     return i;
  //   }
  //   return -1;

  const result = arr.indexOf(val);
  return result;
}

console.log(linearSearch([1, 4, 5, 8, 3, 0], 3)); // 4
console.log(linearSearch([0, 3, 5, 8, 9], 2)); // -1
