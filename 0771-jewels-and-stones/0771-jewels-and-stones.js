/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count =0;
    for(let i of jewels){
        for(let j of stones){
            if(i === j)
            count++
        }
    }
    return count
};