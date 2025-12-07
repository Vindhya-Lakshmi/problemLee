/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {

    let stack = []

    for (let c of s) {
        if (isNaN(c)) {
            stack.push(c)
        }
        else {
            if (stack.length > 0){
                stack.pop()
        }
    }
}

return stack.join("")

};