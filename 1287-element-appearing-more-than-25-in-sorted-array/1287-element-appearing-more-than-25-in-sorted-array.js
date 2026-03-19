/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let n = arr.length;
    const ss = Math.floor(n/4)

    for(let i=0;i< n- ss;i++){
        if(arr[i] === arr[i+ss]){
            return arr[i]
        }
    }
};