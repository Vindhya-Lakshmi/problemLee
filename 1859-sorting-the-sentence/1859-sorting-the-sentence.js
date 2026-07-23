/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let words = s.split(" ")
    let ans = []
    for(let word of words){
        let index = word[word.length-1]
        ans[index - 1] = word.slice(0, -1)
    }
    return ans.join(" ")

};