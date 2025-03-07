from collections import deque
from typing import List

class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
        if not board: 
            return -1
        
        board.reverse()
        n = len(board) # 6 
        visited = set()
        q = deque([(1,0)]) # square, number of moves


        def num_to_board_square(square_num):
            row = (square_num - 1) // n
            column = (square_num - 1) % n

            # if row is odd, start column from right
            if row % 2 == 1:
                column = n - column - 1
            
            if board[row][column] == -1:
                return square_num
            
            return board[row][column]

        while q:
            square_and_moves = q.popleft()
            square = square_and_moves[0]
            moves = square_and_moves[1]

            if square == n * n:
                return moves

            for i in range(1, 7):
                if square + i > n * n: 
                    # you cannot go over the last square, you have to land right on it
                    continue                              
                next_square = num_to_board_square(square + i)
                if next_square not in visited:
                    visited.add(next_square)
                    q.append((next_square, moves + 1))
        
        return -1


board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]

board2 = [[-1,-1],[-1,3]]

board3 = [[1,1,-1],[1,1,1],[-1,1,1]]

output = Solution().snakesAndLadders(board2)

print(output)