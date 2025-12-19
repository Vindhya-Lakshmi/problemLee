/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let ans = []
    let ss = []
    let array = []
    for(let i=0;i<nums.length;i++){
        if(nums[i] % 2 == 0){

        ans.push(nums[i])
        }else{
            ss.push(nums[i])
        }
    }
     return array = [...ans, ...ss]
};