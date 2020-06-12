//input1: tree1 like below, BST
//         25
//     5           30
// 2     10      28    35
//     8    15
//input2: tree2 like below, non BST
//     25
// 30      5
//             2
//output: tree1 is BST, tree2 is not BST
//Time Complexity: O(n)
//Implementation logic: As we traverse each node inorder, we check that the node data is greater than the previously traversed node
//global variable prev is used and initialized to -INFINITY

const bst = require('./bst')
const bst_incorrect = require('./bst-incorrect')
//build the binary search tree1
const root = bst(null, 25);
bst(root, 5);bst(root, 30);bst(root, 2);bst(root, 10);bst(root, 28);bst(root, 35);bst(root, 8);bst(root, 15);

//tree2
const  root_non_bst = bst_incorrect(null, 25); 
bst_incorrect(root_non_bst, 5);bst_incorrect(root_non_bst, 30);bst_incorrect(root_non_bst, 2);


//ALGO
function isBST_inorder(root) { //left,data,right
    if(root==null) {
        return true;
    } 
    let left  = isBST_inorder(root.left);
    if(root.data > prev) {
        prev = root.data;
    } else {
        return false;   
    }
    let right = isBST_inorder(root.right);
    return left && right;
}

function isBST_inorder_util (root) {
    prev = -100000000; //-infinity
    return isBST_inorder(root);
}

console.log(`The tree one is ${isBST_inorder_util(root) ? 'BST' : 'NOT BST'} `);
console.log(`The tree two is ${isBST_inorder_util(root_non_bst) ? 'BST' : 'NOT BST'} `);