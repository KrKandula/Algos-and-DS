//input: tree1 like below, BST
//         25
//     5           30
// 2     10      28    35
//     8    15
//output: true or false, based on value passed

const bst = require('./bst');
//build the binary search tree1
const root = bst(null, 25);
bst(root, 5);bst(root, 30);bst(root, 2);bst(root, 10);bst(root, 28);bst(root, 35);bst(root, 8);bst(root, 15);

console.log(root)

function isExists(root, elem) {
    if(!root) {
        return false;
    }
    if (elem == root.data)
        return true;
    else if(elem<root.data)
        return isExists(root.left, elem)
    else if (elem>root.data)
        return isExists(root.right, elem)
    
}

console.log(isExists(root, 100))