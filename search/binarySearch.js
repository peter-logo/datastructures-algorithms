/**
 * A binary search algorithmn.
 * @param {Array<number>} arr
 * @param {number} val
 * @returns {number}
 */
function binarySearch(arr, val) {
  // Ensure that the data is sorted.
  // Pick a half way point in the array.
  // Check if the left is greater than the right value
  // if right is greater move left to middle
  // if right is less then left move right to middle
  // recalculate the middle.

  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== val && left <= right) {
    if (val < arr[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }

  return arr[middle] === val ? middle : -1;
}

console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 38)); // 6
console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 18)); // -1
