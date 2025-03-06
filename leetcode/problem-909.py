from collections import deque

class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
        n = len(board)
        board.reverse()  # Reverse the board to match problem description

        def int_to_pos(square):
            r = (square - 1) // n
            c = (square - 1) % n
            if r % 2:
                c = n - 1 - c  # Adjust column for odd rows
            return [r, c]

        q = deque([(1, 0)])  # (square, moves)
        visited = set()

        while q:
            square, moves = q.popleft()
            if square == n * n:
                return moves  # Reached the end

            for i in range(1, 7):  # Dice roll
                next_square = square + i
                if next_square > n * n:
                    break  # Out of bounds

                r, c = int_to_pos(next_square)
                if board[r][c] != -1:
                    next_square = board[r][c]  # Snake or ladder

                if next_square not in visited:
                    visited.add(next_square)
                    q.append((next_square, moves + 1))

        return -1  # No path found

board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]

output = Solution().snakesAndLadders(board)

print(output)