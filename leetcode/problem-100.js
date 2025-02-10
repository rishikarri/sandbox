/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) {
        // we got to the end of both trees without early returning false
        return true;
    }

    if (!p || !q) {
        // we're passed the and 
        // so we know that only one is false which means they are not identical
        return false;
    }

    if (p.val !== q.val) {
        // values aren't identical
        return false; 
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};