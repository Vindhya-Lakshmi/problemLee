/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let freq = {}
    for(let i=0;i<arr.length;i++){
        freq[arr[i]] = (freq[arr[i]] || 0 ) + 1
    }

    let seen = new Set()

    for(let count of Object.values(freq)){
        if(seen.has(count)){
        return false
    }
    seen.add(count) 
    }
    return true
};