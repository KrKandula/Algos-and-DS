//input: tree like below
//         25
//     5           30
// 2     10      28    35
//     8    15
//implementation: The height of a node is the going to be maximum of height of left subtree and height of the right subtree + 1
//Time complexity: As we recursively visit each node in the tree, time complexity will be O(n), where n is the number of nodes
//Definition of Height: Height of a node is number of edges in the longest path from the leaf node 
//Height of a tree with single node is zero
//Height of an empty tree is -1

const bst = require('./bst')
//build the binary search tree
const root = bst(null, 25);
bst(root, 5);bst(root, 30);bst(root, 2);bst(root, 10);bst(root, 28);bst(root, 35);bst(root, 8);bst(root, 15);

console.log(`The height of the tree is : ${bst_height(root)}`)


function bst_height(root) {
    if (root==null)
        return -1;
    let lh = bst_height(root.left)
    let rh = bst_height(root.right)
    return Math.max(lh, rh) + 1
}



