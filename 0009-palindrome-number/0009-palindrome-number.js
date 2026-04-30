/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   
    let rev = x.toString().split("").reverse().join("")

    if(rev === x.toString()){
        return true
    }else{
        return false
    }
};