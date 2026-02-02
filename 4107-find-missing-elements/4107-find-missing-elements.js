/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let max = Math.max(...nums)
    let min = Math.min(...nums)

    let set  = new Set(nums)
    let missing = []

    for(let i=min;i<=max;i++){
        if(!set.has(i))
        missing.push(i)
    }
    return missing
    
};