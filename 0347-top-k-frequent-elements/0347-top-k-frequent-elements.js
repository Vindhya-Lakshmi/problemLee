/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freq = {}
    for(let i=0;i<nums.length;i++){
        freq[nums[i]] = (freq[nums[i]] || 0) + 1
        }

        let sorted = Object.entries(freq).sort((a,b) => b[1] - a[1])


    let result = []
        for(let i=0;i<k;i++){
            result.push(Number(sorted[i][0]))
        }
        return result
    
};