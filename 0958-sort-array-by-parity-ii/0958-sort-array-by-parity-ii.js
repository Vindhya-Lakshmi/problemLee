/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let result = new Array(nums.length)
    let ss = 0
    let tt = 1
    for(let num of nums){
        if(num % 2 == 0){
            result[ss] = num
            ss += 2
        }else{
            result[tt] = num
            tt += 2
        }
    }
    return result
    
};