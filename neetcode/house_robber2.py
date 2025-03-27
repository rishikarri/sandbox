class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        nums1 = nums[1:]
        nums2 = nums[:-1]        

        dp1 = [0] * len(nums)
        dp2 = [0] * len(nums)

        def find_max(some_nums, dp):
            for i in range(len(some_nums)):
                if i == 0:
                    dp[0] = some_nums[0]
                if i == 1:
                    dp[1] = max(some_nums[0], some_nums[1])
                
                
                if i >= 2:
                    dp[i] = max(some_nums[i] + dp[i - 2], dp[i - 1])
            
            return dp[len(some_nums) - 1]
        return max(find_max(nums1, dp1), find_max(nums2, dp2))