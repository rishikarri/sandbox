class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        left = 0
        result = float('-inf') 

        current_sum = 0
        for right in range(0, len(nums), 1):
            current_sum += nums[right]
            result = max(result, current_sum)

            if current_sum < 0:
                current_sum = 0
        
        return result



