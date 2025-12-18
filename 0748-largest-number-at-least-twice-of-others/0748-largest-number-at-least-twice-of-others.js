/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {

    let maxi = Math.max(...nums)
    let index = nums.indexOf(maxi)
    for (let i = 0; i < nums.length; i++) {
        if(i !== index && maxi < nums[i] * 2 ){
            return -1
        
        }
    }
    return index
};