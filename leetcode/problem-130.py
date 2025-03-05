from typing import List

class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        if not board or not board[0]:
            return
        
        rows = len(board)
        columns = len(board[0])

        # go through every O on the border, change Os to Ts 
        # and also change all Os to Ts that are connected to "border Os"

        def dfs_change_to_t(row, column):
            if row > rows - 1 or column > columns - 1:
                return
            
            if row < 0 or column < 0: 
                return
            
            cell = board[row][column]
            print(cell, 'cell')

            if (cell != 'O'):
                return
            
            board[row][column] = 'T'
            dfs_change_to_t(row + 1, column)
            dfs_change_to_t(row - 1, column)
            dfs_change_to_t(row, column + 1)
            dfs_change_to_t(row, column - 1)

        for r in range(rows):
            dfs_change_to_t(r, 0)
            dfs_change_to_t(r, columns - 1)
        
        for c in range(columns):
            dfs_change_to_t(0, c)
            dfs_change_to_t(rows - 1, c)

        
        # go through each one and change the Os to Xs, change the Ts to Os because they are connected to a border 
        for r in range(rows):
            for c in range(columns):                
                if board[r][c] == 'O':
                    board[r][c] = 'X'
                if board[r][c] == 'T':
                    board[r][c] = 'O'
                




