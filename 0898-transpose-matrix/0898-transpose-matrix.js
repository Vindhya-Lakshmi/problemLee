/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    let result = []
    for (let i = 0; i < matrix[0].length; i++) {
        let mat = []
        for (let j = 0; j < matrix.length; j++) {
            mat.push(matrix[j][i])
        }
        result.push(mat)
    }
    return result

};