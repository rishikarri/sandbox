def combinationSum(nums, target):
    results = []

    def backtrack(remain, stack, start_index):
        # Base Case 1: We found a valid combination
        if remain == 0:
            # We append a copy of the stack because the stack 
            # will continue to be modified as we backtrack
            results.append(list(stack))
            return
        
        # Base Case 2: We exceeded the target, stop searching this path
        if remain < 0:
            return

        # Explore choices starting from the current index to avoid duplicates
        for i in range(start_index, len(nums)):
            # 1. Action: Choose the number
            stack.append(nums[i])
            
            # 2. Recurse: Try to add more numbers (including the same one)
            # We pass 'i' as the start_index so we can reuse nums[i]
            backtrack(remain - nums[i], stack, i)
            
            # 3. Backtrack: Remove the number to try the next possibility
            stack.pop()

    backtrack(target, [], 0)
    return results

combinationSum([2,5,6,9], 9)

# Example usage:
# nums = [2, 3, 6, 7], target = 7
# Output: [[2, 2, 3], [7]]