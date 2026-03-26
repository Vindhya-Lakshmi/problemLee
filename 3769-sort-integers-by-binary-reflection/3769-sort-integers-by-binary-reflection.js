/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortByReflection = function(nums) {
    function getRef(nums){
    let ss = nums.toString(2)
    let rev = ss.split("").reverse("").join("")
    return parseInt(rev,2)
        
    }
    return nums.sort((a,b) => {
        let refA = getRef(a)
        let refB = getRef(b)
    
    if(refA === refB){
        return a - b
    }
    return refA - refB
    })
};