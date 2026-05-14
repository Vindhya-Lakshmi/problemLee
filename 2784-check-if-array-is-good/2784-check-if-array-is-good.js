/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {

    let n = nums.length;

    let freq = new Array(n + 1).fill(0);

    for(let x of nums) {

        // Invalid number
        if(x > n - 1)
            return false;

        freq[x]++;
    }

    // Numbers from 1 to n-2 should appear once
    for(let i = 1; i <= n - 2; i++) {

        if(freq[i] !== 1)
            return false;
    }

    // n-1 should appear twice
    return freq[n - 1] === 2;
};