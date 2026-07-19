/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    const last = {}
    for(let i=0;i<s.length;i++){
       last[s[i]] = i
    }
    let stack = []
    const seen = new Set()

    for(let i=0;i<s.length;i++){
        const ch = s[i]

        if(seen.has(ch)) continue
    
    while(
        stack.length > 0 && 
        ch < stack[stack.length-1] &&
        last[stack[stack.length-1]] > i
    ){
    seen.delete(stack.pop())

    }
    stack.push(ch);
    seen.add(ch)
}
return stack.join("")
};