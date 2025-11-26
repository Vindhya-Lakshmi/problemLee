/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {

    let element = 0;
    let digit = 0

    for (let num of nums) {
        element += num


        for (let dig of String(num)) {
            digit += Number(dig)
        }
    }

    return Math.abs(element - digit)

};