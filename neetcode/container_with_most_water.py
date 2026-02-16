class Solution:
    def maxArea(self, heights: List[int]) -> int:

        left = 0
        right = len(heights) - 1
        current_max = 0 
        move_left_pointer_next = True
        while left <= right:
            width = right - left
            # calc with and move shorter bar
            shorter_height = None
            if heights[left] > heights[right]:
                # right is shorter
                move_left_pointer_next = False
                shorter_height = heights[right]
            else: 
                move_left_pointer_next = True
                shorter_height = heights[left]
            
            container_max = width * shorter_height
            if container_max > current_max:
                current_max = container_max
            
            if move_left_pointer_next:
                left += 1
            else: 
                right -= 1
        
        return current_max
            


        
            
        