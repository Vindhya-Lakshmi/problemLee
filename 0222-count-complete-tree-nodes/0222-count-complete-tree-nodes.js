/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    
    if(!root)
    return 0

    function getHeight(node){
        let h =0
    while(node){
        h++
        node = node.left 
    }
    
    return h
    }

    leftHeight = getHeight(root.left)
    rightHeight = getHeight(root.right)
        if(leftHeight === rightHeight){
            return(2 ** leftHeight) + countNodes(root.right)
        }else{
            return(2**rightHeight)+ countNodes(root.left)
        }
    
};