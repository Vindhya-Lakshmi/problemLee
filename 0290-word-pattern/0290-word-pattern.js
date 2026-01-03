/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let ss = s.split(" ")
    if(pattern.length !== ss.length) return false

    let charToWord = new Map()
    let wordToChar = new Map()

    for(let i=0;i<pattern.length;i++){
        let  ch = pattern[i]
        let word = ss[i]
        if(charToWord.has(ch) && charToWord.get(ch) !== word){
        return false
    }
    if(wordToChar.has(word) && wordToChar.get(word) !== ch) {
        return false
    }
    charToWord.set(ch,word);
    wordToChar.set(word,ch)
    }
    return true
};