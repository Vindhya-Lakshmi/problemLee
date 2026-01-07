/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
    let result = []
    let start = 0

    for (let i = 0; i <= s.length; i++) {
        if (i === s.length || s[i] !== s[start]) {

            let end = i - 1
            let length = end - start + 1

            if (length >= 3) {
                result.push([start, end])
            }
            start = i
        }
    }
    return result
};