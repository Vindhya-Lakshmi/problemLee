/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {

    let ss = -1
    let set = new Set(nums)

    for(let num of set){
        if(set.has(-num)){
        ss = Math.max(ss, num)
        }
    }  
    return ss  
};