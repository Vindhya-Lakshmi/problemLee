/**
 * @param {string} s
 * @return {string}
 */
var processStr = function(s) {
    let result = []
    let n = s.length;

    for(let i=0;i<n;i++){
        let ch = s[i]
        if(ch === '*'){
            if(result.length !== 0){
                result.pop();
            }
        }
        else if (ch == '#'){
            result.push(...result)
        }
        else if (ch == '%'){
            result.reverse()
        }
        else if (ch >= 'a' && ch <= 'z'){
            result.push(ch)
        }
    }
    return result.join('')
};