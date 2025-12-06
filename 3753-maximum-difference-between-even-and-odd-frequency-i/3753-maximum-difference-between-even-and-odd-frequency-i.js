/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {

    let freq = new Array(26).fill(0)

    for (let ch of s) {
        freq[ch.charCodeAt(0) - 97]++
    }

        let odd = []
        let even = []

        for (let f of freq) {
            if (f === 0) continue
            if (f % 2 == 0) even.push(f)
            else odd.push(f)
        }

    if(odd.length === 0 || even.length === 0) return 0

    let max = Math.max(...odd)
    let min = Math.min(...even)

    return max - min



};