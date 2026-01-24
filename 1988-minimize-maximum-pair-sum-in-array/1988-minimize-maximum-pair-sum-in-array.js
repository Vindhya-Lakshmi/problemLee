/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {

    nums.sort((a, b) => a - b);

    let max = 0;
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        pair = nums[left] + nums[right]
        max = Math.max(max, pair)
        left++;
        right--;
    }
    return max;        

};