class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1
        mid = (left + right) // 2 

        def find_pivot(l, m, r):
            print ('***', l, m, r)
            new_mid = m
            new_l = l
            # create 2 sorted arrays by finding pivot 
            if nums[m] < nums[m - 1]:
                return m
            
            if nums[m] > nums[r]:  
                new_l = m
                new_mid = (new_l + r) // 2
                return find_pivot(new_l, new_mid, r)
            
            
        pivot = find_pivot(left, mid, right)

        first_arr = nums[0:pivot]
        second_arr = nums[pivot:len(nums)]

        
        def find_target(arr, target):
            mid = len(arr) // 2
            print(mid, 'mid')

            if len(arr) == 0:
                return None 

            if (arr[mid] == target):
                return mid
            
            if (arr[mid] > target):
                new_arr_left = arr[0:mid]
                print('new_arr_left', new_arr_left)
                return find_target(new_arr_left, target)
            else: 
                new_right = len(arr) - 1
                print(new_right, 'new_right')
                new_arr_right = arr[mid:new_right]
                print('new_arr_right', new_arr_right)
                return find_target(new_arr_right, target)
            
            
        print(first_arr, 'first_arr')
        print(second_arr, 'second_arr')            
            
        target1 = find_target(first_arr, target)
        target2 = find_target(second_arr, target)
        print(target1, 'target1')
        print(target2, 'target2')

        if target1: 
            return target1 
        if target2 != None: 
            return len(first_arr) + target2

        return -1 
        