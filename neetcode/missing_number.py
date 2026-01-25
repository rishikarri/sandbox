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


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        # big idea - exclusive or every number in the list 
        # with every number that SHOULD BE in the list 
        # [0, 1, 2, 3] should be 
        # [0, 1, 3] the list

        # what will happen is that 2 will reveal itself
        # here's why

        # should be 
        # 0000
        # 0001
        # 0010
        # 0011

        # actual list
        # 0000
        # 0001
        # 0011
        
        largest_num = len(nums)
        res = largest_num

        for i in range(largest_num):
            res ^= i
            res ^= nums[i]

            # 3 ^ 0 ^ 0 -> 3 
            # 3 ^ 1 ^ 1 -> 3
            # 3 ^ 2 ^ 3 -> 2

        return res


