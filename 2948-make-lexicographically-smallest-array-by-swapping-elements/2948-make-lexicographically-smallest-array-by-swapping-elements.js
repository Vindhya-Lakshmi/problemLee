/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {
    let n = nums.length;

    let arr = nums.map((value, index) => [value, index]);

    arr.sort((a, b) => a[0] - b[0]);

    let result = new Array(n);

    let i = 0;

    while (i < n) {
        let j = i;

        while (
            j + 1 < n &&
            arr[j + 1][0] - arr[j][0] <= limit
        ) {
            j++;
        }

        let values = [];
        let indices = [];

        for (let k = i; k <= j; k++) {
            values.push(arr[k][0]);
            indices.push(arr[k][1]);
        }

        indices.sort((a, b) => a - b);

       
        for (let k = 0; k < values.length; k++) {
            result[indices[k]] = values[k];
        }

        i = j + 1;
    }

    return result;

};