/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function (order, friends) {

    const friendSet = new Set(friends)
    const result = []

    for (let i = 0; i < order.length; i++) {
        if (friendSet.has(order[i])) {
            result.push(order[i])
        }
    }
    return result

};