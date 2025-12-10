/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
    let str = ""
    if (n % 2 !== 0) {
        for (let i = 1; i <= n; i++) {
            str += "p"
        }
    }else{
        for (let i = 1; i < n; i++) {
            str += "s"
        }
        str+="o"
    }

    return str
};