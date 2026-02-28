class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        left = 0
        right = 1

        profit = 0 

        while right < len(prices):
            current_window_profit = prices[right] - prices[left]
            if current_window_profit > profit:
                profit = current_window_profit
            
            if prices[left] >= prices[right]:
                left = right
            right += 1
            
            

        return profit         