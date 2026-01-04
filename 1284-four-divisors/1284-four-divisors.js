/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let sum =0
    for(let num of nums){
        let divisor = []

        for(let i=1;i*i<=num;i++){
            if(num % i === 0){
            divisor.push(i)
        
        if(i !== num/i){
            divisor.push(num/i)
        }
    }

        if(divisor.length > 4) break
    }

        if(divisor.length === 4){
            
                sum += divisor.reduce((a,b) => a+b, 0)
            }
        }
       
    return sum
    
};