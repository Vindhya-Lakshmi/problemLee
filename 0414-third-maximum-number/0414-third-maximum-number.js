/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let result = 0
    let num = [...new Set(nums)]
    if (num.length >= 3){
        let ss = num.sort((a,b) => b-a)
        return ss[2]
    }else {
        return Math.max(...num)
    }
       
};