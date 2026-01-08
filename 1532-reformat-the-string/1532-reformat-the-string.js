/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {

    let alpha = ""
    let numeric = ""
    
    for(let ch of s){
        if(ch >= '0' & ch <= '9'){
            numeric += ch
        }else {
            alpha += ch
        }
    }

    if(Math.abs(numeric.length - alpha.length) > 1)
    return ""

    let result = ""

    let i =0
    let start = alpha.length >= numeric.length

    while(i < alpha.length || i < numeric.length){
        if(start && i < alpha.length){
            result += alpha[i]
        }
        if(!start && i < numeric.length){
            result += numeric[i]
        }
        if(start && i < numeric.length){
            result += numeric[i]
        }
        if(!start && i < alpha.length){
            result += alpha[i]
        }
        i++
    }
    return result
};