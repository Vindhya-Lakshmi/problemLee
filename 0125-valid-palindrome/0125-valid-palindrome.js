/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newStr = '';
    for (let i of s) {
        if (/[a-zA-Z0-9]/.test(i)) {
            newStr += i.toLowerCase();
        }
    }
    let l = 0, r = newStr.length - 1;
    while (l < r) {
        if (newStr[l++] !== newStr[r--]) return false;
    }
    return true;
};