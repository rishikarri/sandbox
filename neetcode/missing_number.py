# O of n ^ 2 
# class Solution:
#     def missingNumber(self, nums: List[int]) -> int:
#         # put in every number that should be in the array into a lookup 

#         n = len(nums)
#         lookup = {}

#         for i in nums:
#             lookup[i] = i 

#         for j in range(n + 1):
#             lookup_val = lookup.get(j)
#             if not lookup_val and lookup_val != 0:
#                 return j