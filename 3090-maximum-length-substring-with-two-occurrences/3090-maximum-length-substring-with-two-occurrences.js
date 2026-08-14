/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let count = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        count[char] = (count[char] || 0) + 1;

        while (count[char] > 2) {
            count[s[left]]--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;

};