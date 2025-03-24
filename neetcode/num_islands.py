class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        result = 0
        num_rows = len(grid)
        num_columns = len(grid[0])
        def mark_land(row, column):
            
            if row > num_rows - 1:
                return
            if column > num_columns - 1:
                return
            
            if row < 0:
                return

            if column < 0:
                return

            current_cell = grid[row][column]

            if current_cell == '0' or current_cell == 'marked':
                return
            
            if current_cell == '1': 
                grid[row][column] = 'marked'

            mark_land(row + 1, column)
            mark_land(row - 1, column)
            mark_land(row, column + 1)
            mark_land(row, column - 1)


        for i in range(len(grid)):
            for j in range(len(grid[i])):
                current_cell = grid[i][j]
                
                if current_cell == '1':
                    # we found an island - increase result 
                    # mark all the land around it as "marked"
                    result += 1
                    mark_land(i, j)

        print('grid', grid)        
        return result