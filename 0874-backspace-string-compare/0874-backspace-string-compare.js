/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {

    function stack(str) {
        let sart = []
        for (let ch of str) {
            if (ch === '#') {
                if (sart.length > 0) {
                    sart.pop()
                }
            } else {
                sart.push(ch)
            }
        }
        return sart.join("")
    }
    return stack(s) === stack(t)
};