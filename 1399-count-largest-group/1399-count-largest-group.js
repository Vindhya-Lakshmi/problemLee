/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let map = new Map()

    for(let i=1;i<=n;i++){
        let sum = i.toString().split('').reduce((a,b)=>a+Number(b),0)
        map.set(sum,(map.get(sum) || 0) + 1)
    }
    let maxSize = Math.max(...map.values())
        let count = 0


     for (let val of map.values()) {
        if (val === maxSize) count++;
    }

    return count;
};