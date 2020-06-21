//     5
// 4        7
//     6        8    
//                   9

const {findMin,findMax} = require('./bst-min-max-elem');
const bst = require('./bst');
const {preorder, inorder, postorder} =require('./dft');

class Node{
    constructor(data) {
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
      
function isLeafNode(node) {
    return (!node.left && !node.right)
}

function deleteNode(root, elem) {
    if (root == null) {
        return -1;
    }
    if (root.data == elem) {
        if(isLeafNode(root)) {
            return null;
        } else if (root.left == null || root.right == null) { //case of single child
            return root.left ? root.left: root.right;
        } else { //case of two childs
            //get max of right 
            let minValue = findMin(root.right);
            root.data = minValue;
            root.right = deleteNode(root.right, minValue);
            return root;
        }
        
    }
    let left = deleteNode(root.left, elem);
    let right = deleteNode(root.right, elem);

    if (!left && !right) {
    return -1;
    }

    if (left != -1) {
        root.left = left;
    } else if (right != -1) {
        root.right = right;
    }
    return root;
}
      
//     5
// 4        7
//     6        8    
//                   9
const tree2 = bst(null, 5);bst(tree2, 4);bst(tree2, 7);bst(tree2, 6);bst(tree2, 8);bst(tree2, 9);
console.log("tree: ==>");
inorder(tree2);
console.log('new tree:');
inorder(deleteNode(tree2, 7));