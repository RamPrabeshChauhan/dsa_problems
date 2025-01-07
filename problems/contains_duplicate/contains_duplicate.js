// Leetcode link: https://leetcode.com/problems/contains-duplicate/

let nums_1 = [1, 2, 3, 1]
let nums_2 = [1, 2, 3, 4]

// // Method 1: Brute Force (Time: O(n^2), Space: O(1))
// function contains_dublicate(nums) {
//   for(i = 0; i < nums.length; i++) {
//     for(j = i+1; j < nums.length; j++) {
//       if (nums[i] == nums[j]) {
//         return true 
//       }
//     }
//   }

//   return false
// }

// Method 2: HashSet (Time: O(n), Space: O(n))
function contains_dublicate(nums) {
  let hash = {}
  for(i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      return true
    }

    hash[nums[i]] = true
  }

  return false
}

console.log(contains_dublicate(nums_1)) // true
console.log(contains_dublicate(nums_2)) // false