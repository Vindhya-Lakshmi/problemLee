/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let result =[]
    let remaining=[]
    arr1.sort((a,b) => a-b)

    for(let s2 of arr2){
        for(let s1 of arr1){
            if(s1==s2) result.push(s1)
        }
    }

    for(let s1 of arr1){
        if(!arr2.includes(s1)) remaining.push(s1)
    }
    result.push(...remaining)
    return result
  
};