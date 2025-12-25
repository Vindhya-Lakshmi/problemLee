/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a,b) => b-a)
    let sum = 0
    for(let i=0;i<k;i++){
        let current = happiness[i] - i

        if(current > 0){
            sum += current
        }else {
            break
        }

    }
    return sum
};