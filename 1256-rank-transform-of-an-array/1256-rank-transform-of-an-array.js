/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    
        let sorted = [...arr].sort((a,b) => a-b)

        let ranks = {}
        rank = 1

        for(let i=0;i<arr.length;i++){
            if(ranks[sorted[i]] == undefined){
                ranks[sorted[i]] = rank
                rank++
            }
        }
        let result =[]
        for(let num of arr){
            result.push(ranks[num])
        }
        return result
};