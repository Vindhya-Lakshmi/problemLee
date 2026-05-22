/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
     const m = mat.length;
    const n = mat[0].length;

    function processDiagonal(r, c) {
        const values = [];
        let i = r, j = c;

        while (i < m && j < n) {
            values.push(mat[i][j]);
            i++;
            j++;
        }

        values.sort((a, b) => a - b);

        i = r; j = c;
        let idx = 0;
        while (i < m && j < n) {
            mat[i][j] = values[idx++];
            i++;
            j++;
        }
    }

    for (let col = 0; col < n; col++) {
        processDiagonal(0, col);
    }

    for (let row = 1; row < m; row++) {
        processDiagonal(row, 0);
    }

    return mat;
};