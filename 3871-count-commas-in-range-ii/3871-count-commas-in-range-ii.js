/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let count = 0;
    let threshold = 1000;

    while (threshold <= n) {
        count += n - threshold + 1;
        threshold *= 1000;
    }

    return count;

};