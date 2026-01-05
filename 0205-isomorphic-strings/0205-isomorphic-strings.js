/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false

    let mapS = {}
    let mapT = {}

    for(let i=0;i<s.length;i++){
        let c1 = s[i]
        let c2 = t[i]

        if((mapS[c1] && mapS[c1] !== c2) ||
        (mapT[c2] && mapT[c2] !== c1)) {
            return false
        }
    mapS[c1] = c2
    mapT[c2] = c1
    }
    return true
};