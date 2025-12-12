/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = []
    let newSet = new Set();
    for(let i=0;i<nums.length;i++){
        newSet.add(nums[i])
    } 
    for(let i=1;i<=nums.length;i++){
        if(!newSet.has(i)){
            result.push(i)
        }

    }  
    return result
};