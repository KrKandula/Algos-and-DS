//Depth first traversal
// (or) Depth first traversal
//input: tree like below
//         25
//     5           30
// 2     10      28    35
//     8    15
//output: 2,5,8,10,15,25,28,30,35 (sorted ascending list)

const bst = require('./bst');

//build the binary search tree
const root = bst(null, 25);
bst(root, 5);bst(root, 30);bst(root, 2);bst(root, 28);bst(root, 10);bst(root, 15);bst(root, 8);bst(root, 35);

//inorder traversal
function inorder(root){//Left, data, right
    if(root == null) {
        return;
    }
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
}

inorder(root);