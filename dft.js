//Depth first traversal
// (or) Depth first traversal
//input: tree like below
//         25
//     5           30
// 2     10      28    35
//     8    15
//output for inorder: 2,5,8,10,15,25,28,30,35 (sorted ascending list)
//output for postorder: 2, 8, 15, 10, 5, 28, 35, 30, 25
//output for preorder: 25, 5, 2, 10, 8, 15, 30, 28, 35

const bst = require('./bst');

//build the binary search tree
const root = bst(null, 25);
bst(root, 5);bst(root, 30);bst(root, 2);bst(root, 10);bst(root, 28);bst(root, 35);bst(root, 8);bst(root, 15);

//inorder traversal
function inorder(root){ //Left, data, right
    if(root == null) {
        return;
    }
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
}

//preorder traversal
function preorder(root){ //data, left, right
    if (root==null) {return}
    console.log(root.data);
    preorder(root.left);
    preorder(root.right);
}

//postorder traversal
function postorder(root){ //left, right, data
    if (root==null) {return;}
    postorder(root.left);
    postorder(root.right);
    console.log(root.data);
}

console.log("Inorder Traversal ...\n")
inorder(root);

console.log("Post-order Traversal ...\n");
postorder(root);

console.log("Pre-order Traversal ...\n");
preorder(root);