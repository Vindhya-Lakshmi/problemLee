/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let moves = Math.min(...nums)
    let ans =  0
    for(let x of nums)
        ans += x- moves
    
    return ans
};