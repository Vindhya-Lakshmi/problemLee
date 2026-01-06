/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let freq = {}
     for(let ch of s){
        freq[ch] = (freq[ch] || 0) + 1
     }
    let result = ""
     for(let ch of order){
        if(freq[ch]) {
            result += ch.repeat(freq[ch])
            delete freq[ch]
        }
     }
     for(let ch in freq){
        result += ch.repeat(freq[ch])
     }
     return result
};