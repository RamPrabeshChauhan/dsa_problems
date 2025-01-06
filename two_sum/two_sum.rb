# leetcode: https://leetcode.com/problems/two-sum/

nums_1 = [2,15,11,7]
target_1 = 9          # Output: [0,3]

nums_2 = [3,2,4]
target_2 = 6          # Output: [1,2]

nums_3 = [3,3]
target_3 = 6          # Output: [0,1]

# # Method 1: Burte Force (Time: O(n^2), Space: O(1))
# def two_sum(nums, target)
#   nums.each_with_index do |num, i|
#     nums[i+1..-1].each_with_index do |num2, j|
#       return [i, i + 1 + j] if num + num2 == target
#     end
#   end
# end

# Method 2: Hash Table (Time: O(n), Space: O(n))
def two_sum(nums, target)
  hash = {}
  nums.each_with_index do |num, i|
    remain = target - num
    if hash[remain]
      return [hash[remain], i]
    end

    hash[num] = i
  end
end


p two_sum(nums_1, target_1) # [0,3]
p two_sum(nums_2, target_2) # [1,2]
p two_sum(nums_3, target_3) # [0,1]
