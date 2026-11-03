/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let moves = 0;
    let max = Math.max(...nums)

    for(let i=0;i<nums.length;i++){
         moves += max - nums[i]
    }
    return moves
};