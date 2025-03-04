class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid: 
            return 0

        num_islands = 0

        rows = len(grid)
        columns = len(grid[0])

        print('rows', rows)
        print('columns', columns)

        def dfs_convert_to_water(land_row, land_column):
            if (land_column > columns or land_row > rows):
                return
            
            if land_column < 0 or land_row < 0:
                return
            
            if grid[land_row][land_column] == "0":
                return 
            
            grid[land_row][land_column] = "0"

            dfs_convert_to_water(land_row + 1, land_column)
            dfs_convert_to_water(land_row - 1, land_column)
            dfs_convert_to_water(land_row, land_column - 1)
            dfs_convert_to_water(land_row, land_column + 1)

                

        for row in range(rows):
            for column in range(columns):

                print(row, column, 'row column')
                # if we come across land, increase num_islands 
                # also convert every 1 on this island to 0 because we already "counted" this one
                if (grid[row][column] == 1): 
                    num_islands += 1 
                    dfs_convert_to_water(row, column)

        return num_islands