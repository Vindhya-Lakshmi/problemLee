/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let freq = {}

    for(let num of nums){
        if(freq[num]){
            freq[num]++
        }else{
            freq[num] = 1
            
        }
    }
    for(let num of nums){
        if(freq[num] == 1){
            return num
        }
    }
    
};