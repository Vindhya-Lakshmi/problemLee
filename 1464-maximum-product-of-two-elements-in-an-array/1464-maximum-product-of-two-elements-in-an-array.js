/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let ans = 0
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            let s = (nums[i]-1)*(nums[j]-1)
            ans = Math.max(ans, s)

        }
    }
    return ans
};