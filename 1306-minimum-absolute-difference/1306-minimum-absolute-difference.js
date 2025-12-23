/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a-b)
    let ss = Infinity
    let result = []
    for(let i=1;i<arr.length;i++){
        ss = Math.min(ss, arr[i] - arr[i-1])
    }
    for(let i=1;i<arr.length;i++){
        if(arr[i] - arr[i-1] === ss){
            result.push([arr[i-1], arr[i]])
        }
    }
    return result
};