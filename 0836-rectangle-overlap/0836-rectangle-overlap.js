/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
       if (
        rec1[2] <= rec2[0] ||  // rec1 is completely left
        rec1[0] >= rec2[2] ||  // rec1 is completely right
        rec1[3] <= rec2[1] ||  // rec1 is completely below
        rec1[1] >= rec2[3]     // rec1 is completely above
    ) {
        return false;
    }

    return true;

};