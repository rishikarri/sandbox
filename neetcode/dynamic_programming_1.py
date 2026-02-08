class Solution:
    def climbStairs(self, n: int) -> int:
        # this is a dp problem
        # because we can break down the problem into subproblems
        # and use the solution to "smaller subproblems" to solve for larger "sub problems"
        # if n is 5, we can first solve for n is 4 and n is 3 
        # and then use the solutions from n is 4 and n is 3 to get a solution for n is 5 

        if n <= 2:
            return n
        
        dp = [0] * (n + 1)

        # base cases
        dp[1] = 1
        dp[2] = 2

        # fill_dp
        for i in range(3, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]

        
        print(dp)

        return dp[n]