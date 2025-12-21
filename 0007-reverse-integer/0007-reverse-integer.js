/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  
    let ans = 0;
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    while (x > 0) {
        ans = ans * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    ans *= sign;
    return (ans < -2147483648 || ans > 2147483647) ? 0 : ans;

};