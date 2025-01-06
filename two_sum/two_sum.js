// leetcode: https://leetcode.com/problems/two-sum/

let nums_1 = [2, 15, 11, 7]
let target_1 = 9 // Output: [0,3]

let nums_2 = [3, 2, 4]
let target_2 = 6 // Output: [1,2]

let nums_3 = [3, 3]
let target_3 = 6 // Output: [0,1]


// // Method 1: Brute Force (Time: O(n^2), Space: O(1))
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// }

// Method 2: Hash Table (Time: O(n), Space: O(n))
function twoSum(nums, target) {
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    let remain = target - nums[i]
    if (remain in hash) {
      return [hash[remain], i]
    }

    hash[nums[i]] = i
  }
}

console.log(twoSum(nums_1, target_1)) // [0,3]
console.log(twoSum(nums_2, target_2)) // [1,2]
console.log(twoSum(nums_3, target_3)) // [0,1]
