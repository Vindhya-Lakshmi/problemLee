/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let row = grid.length
    let rr = grid[0].length

    let r = 0
    let c = rr - 1
    let count = 0

    while (r < row && c >= 0) {
        if (grid[r][c] < 0) {
            count += row - r
            c--
        }
        else {
            r++
        }

    }
    return count
};