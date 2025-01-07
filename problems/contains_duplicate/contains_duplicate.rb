# Leetcode link: https://leetcode.com/problems/contains-duplicate/

nums_1 = [1, 2, 3, 1]
nums_2 = [1, 2, 3, 4]

# # Method 1: Brute Force (Time: O(n^2), Space: O(1))
# def contains_duplicate(nums)
#   nums.each_with_index do |num, i|
#     (i+1).upto(nums.length - 1) do |j|
#       return true if nums[i] == nums[j]
#     end
#   end

#   return false
# end

# Method 2: HashSet (Time: O(n), Space: O(n))
def contains_duplicate(nums)
  hash = {}
  nums.each do |num|
    return true if hash[num]
    hash[num] = true
  end

  return false
end

p contains_duplicate(nums_1) # Output: true
p contains_duplicate(nums_2) # Output: false
