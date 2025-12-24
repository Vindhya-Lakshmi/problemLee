/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
   let total = apple.reduce((a,b) => a+b, 0)

   capacity.sort((a,b) => b-a)

   let count =0 
   for(let i=0;i<capacity.length;i++){
    total -= capacity[i]
    count++
    if(total <= 0){
        return count
    }
   }
   return count
};