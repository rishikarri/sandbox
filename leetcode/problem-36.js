/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = new Array(9).fill(null).map(() => new Set());
    const columns = new Array(9).fill(null).map(() => new Set());
    const boxes = new Array(9).fill(null).map(() => new Set());

    let currentNum; 
    let currentBox
    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            currentNum = board[row][column]

            if (currentNum === '.') {
                continue
            }

            // row = 0; column = 0; box = 0 
            // row = 0; column = 1; box = 0 
            // row = 0; column = 2; box = 0 
            // row = 1; column = 0; box = 0; 
            // row = 0; column = 3; box = 1

            currentBox = Math.floor(row / 3) * 3 + Math.floor(column / 3);

            // if current row, column or box already has this number, return false
            if (
                rows[row].has(currentNum) || 
                columns[column].has(currentNum) || 
                boxes[currentBox].has(currentNum)
                ) {
                return false; 
            }

            rows[row].add(currentNum)
            columns[column].add(currentNum)
            boxes[currentBox].add(currentNum)


        }
    }

    return true; 
};



const board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

isValidSudoku(board)