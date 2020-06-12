//input: tree1 like below
//         25
//     5           30
// 2     10      28    35
//     8    15
// tree2 like below
//     25
// 30      5
//             2
//output: whether or not the each tree is BST
//Timecomplexity: O(n), since each node it checked once
//reference: https://www.youtube.com/watch?v=yEwSGhSsT0U&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=35
//Implementation: 
//the root data needs to be greater than minValue and less than maxValue. min and max values would be -infinity and +infinity
//The value of the left node should be less than the root data and greater than the passed in min value, similarly
//value of the right node should be greater than root data and less than the max value passed.

const bst = require('./bst')
const bst_incorrect = require('./bst-incorrect')
//build the binary search tree1
const root = bst(null, 25);
bst(root, 5);bst(root, 30);bst(root, 2);bst(root, 10);bst(root, 28);bst(root, 35);bst(root, 8);bst(root, 15);

//tree2
const  root_non_bst = bst_incorrect(null, 25); 
bst_incorrect(root_non_bst, 5);bst_incorrect(root_non_bst, 30);bst_incorrect(root_non_bst, 2);

//algo
function isBST(root, min, max) {
    if (root == null)
        return true;
    if(root.data > min && root.data < max && isBST(root.left, min, root.data) && isBST(root.right, root.data, max))
        return true;
    else 
        return false;
}


console.log(`The tree one is ${isBST(root, -100000, 1000000) ? 'BST' : 'is NOT BST'} `);
console.log(`The tree two is ${isBST(root_non_bst, -100000, 1000000) ? 'BST' : 'is NOT BST'} `);

