/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
        let pos = []
        let neg = []

        for(let num of nums){
            if(num > 0)
            pos.push(num)
            else 
            neg.push(num)
        }
        let ans = []

        for(let i=0;i<pos.length;i++){
            ans.push(pos[i])
            ans.push(neg[i])
        }
        return ans
    
    
};