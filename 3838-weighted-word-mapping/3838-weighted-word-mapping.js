/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let result = "";
    for(const word of words){
        let sum = 0

        for(const ch of word){
            sum += weights[ch.charCodeAt(0) - 97];
        }

        let mod =  sum % 26;
            result += String.fromCharCode(122 - mod);
        }
    
        return result
    
};