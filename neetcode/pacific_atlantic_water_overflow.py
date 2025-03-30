from typing import List

class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        pacific_ocean_reach_set = set()
        atlantic_ocean_reach_set = set()

        num_rows = len(heights)
        num_columns = len(heights[0])

        def test_can_reach(row, column, ocean_reached_set, prev_height):
            if (row >= num_rows or column >= num_columns or row < 0 or column < 0 or heights[row][column] < prev_height):
                return

            ocean_reached_set.add((row, column))

            test_can_reach(row + 1, column, ocean_reached_set, heights[row][column])
            test_can_reach(row - 1, column, ocean_reached_set, heights[row][column])
            test_can_reach(row, column + 1, ocean_reached_set, heights[row][column])
            test_can_reach(row, column - 1, ocean_reached_set, heights[row][column])


        # 1020
        for j in range(num_columns):
            print('j', j)
            test_can_reach(0, j, pacific_ocean_reach_set, heights[0][j])
            test_can_reach(num_rows - 1, j, atlantic_ocean_reach_set, heights[num_rows - 1][j])
        
        for i in range(num_rows):
            test_can_reach(i, 0, pacific_ocean_reach_set, heights[i][0])
            test_can_reach(i, num_columns - 1, atlantic_ocean_reach_set, heights[i][num_columns - 1])
            print(heights[i][j])
        
        print(atlantic_ocean_reach_set, 'atlantic ocean reach set')
        print(pacific_ocean_reach_set, 'pacific ocean reach set')

        result = []

        for item in atlantic_ocean_reach_set: 
            if item in pacific_ocean_reach_set:
                result.append(list(item))
                
        print(result, 'result')
        return result

heights=[[1],[1]]

sol = Solution().pacificAtlantic(heights)

print(sol, 'sol')
