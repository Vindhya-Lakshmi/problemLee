/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    let result = []
    for (let i = 0; i < matrix.length; i++) {
        let min = Math.min(...matrix[i])
        let indexMin = matrix[i].indexOf(min)

        let isIndexMax = true
        for (let s = 0; s < matrix.length; s++) {
            if (matrix[s][indexMin] > min) {
                isIndexMax = false
                break;
            }
        }
        if (isIndexMax) result.push(min)
    }
    return result
};