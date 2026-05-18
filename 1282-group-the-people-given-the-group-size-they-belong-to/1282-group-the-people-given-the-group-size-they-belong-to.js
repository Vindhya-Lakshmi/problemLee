/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {

    let res = []
    let groups = {}

    for(let i=0;i<groupSizes.length;i++){
        const size = groupSizes[i]
        if(!groups[size]){
            groups[size] = []
        }
        groups[size].push(i)

        if(groups[size].length === size){
            res.push(groups[size]);
            delete groups[size]
        }
    }
    return res
    
};