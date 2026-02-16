class Solution:
    def find_target_index(self, arr, target):
        
        left = 0
        right = len(arr) - 1
        while left <= right:            
            mid = (left + right) // 2
            print('mid in find_target_index', mid)
            if arr[mid] == target: 
                return mid
            
            if arr[mid] > target:
                right = mid - 1
            if arr[mid] < target:
                left = mid + 1
            
        
        return - 1
            

    def search(self, nums: List[int], target: int) -> int:
        # find dip
        dip = None
        left = 0 
        right = len(nums) - 1
        mid = (right + left) // 2

        while not dip: 
            print(left, mid, 'left, mid')
            left_of_mid = mid - 1
            if nums[mid] < nums[left_of_mid]:
                print("HI", mid)
                dip = mid
                break            
            left = mid 
            mid = (right + left) // 2
            print(left, mid, 'left, mid')

        print("dip", dip)
        arr_1 = nums[0: dip]
        arr_2 = nums[dip::]

        print("arr_1", arr_1)
        print("arr_2", arr_2)

        target_index_1 = self.find_target_index(arr_1, target)
        target_index_2 = self.find_target_index(arr_2, target)
        print('target_index_1', target_index_1)
        print('target_index_2', target_index_2)

        if target_index_1 > -1:
            return target_index_1
        
        if target_index_2 > -1: 
            return len(arr_1) + target_index_2

        return -1


        print('arr_1', 'arr_2', arr_1, arr_2)

        # now binary search through each one

        

        


        