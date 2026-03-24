/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    // Step 1: Sort
    nums.sort((a, b) => a - b);

    // Step 2: Flip negatives
    for (let i = 0; i < nums.length && k > 0; i++) {
        if (nums[i] < 0) {
            nums[i] = -nums[i];
            k--;
        }
    }

    // Step 3: If k still remains
    nums.sort((a, b) => a - b);

    if (k % 2 === 1) {
        nums[0] = -nums[0];
    }

    // Step 4: Return sum
    return nums.reduce((sum, val) => sum + val, 0);

};