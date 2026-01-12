/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = []
    nums.sort((a, b) => a - b)
    const n = nums.length
    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let j = i + 1;
        let k = n - 1
        while (j < k) {
            const total = nums[i] + nums[j] + nums[k]

            if (total > 0) {
                k--
            } else if (total < 0) {

                j++
            } else {
                result.push([nums[i], nums[j], nums[k]])
                j++

                while (j < k && nums[j] === nums[j - 1]) {
                    j++
                }
            }
        }
    }
    return result;

};