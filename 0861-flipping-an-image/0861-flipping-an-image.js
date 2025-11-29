/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {

    let n = image.length
    let m = image[0].length

    for(let i=0;i<m;i++){
        image[i].reverse()

        for(let j=0;j<n;j++){
            image[i][j] = 1 - image[i][j]
        }
    }
    return image
    
};