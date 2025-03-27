class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 0: 
            return 0
        
        

        dp = [0] * len(nums)


        for i in range(len(nums)):
            if i == 0:
                dp[i] = nums[0]
            
            if i == 1:
                dp[i] = max(nums[0], nums[1])
            if i >= 2:
                dp[i] = max(nums[i] + dp[i - 2], dp[i-1])
        
        print(dp)
        return dp[len(nums) - 1] 