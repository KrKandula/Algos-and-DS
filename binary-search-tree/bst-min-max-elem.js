//input: tree like below
//         25
//     5           30
// 2     10      28    35
//     8    15
//output: 
//implmentation logic for finding min: left most tree has the min element
//Time complexity 
//worst case O(n) for left skewed bst/ right skewed trees
//best case O(1) to find min value in a right skewed tree, similarly, O(1) to find max value in a left skewed tree
//For a balanced BST it is O(logn) 



const bst = require('./bst')
//build the binary search tree
const root = bst(null, 25);
bst(root, 5);bst(root, 30);bst(root, 2);bst(root, 10);bst(root, 28);bst(root, 35);bst(root, 8);bst(root, 15);

// min = findmin(root);
// console.log('Min elem using iterative method is: ' + min);

// min_recursion = findmin_recursion(root);
// console.log('Min elem using recursion method is: ' + min_recursion);

// max = findmax(root);
// console.log('Max elem using iterative method is: ' + max);

// max_recursion = findmax_recursion(root);
// console.log('MAX elem using recursion method is: ' + max_recursion);

//using regular method
function findmin(root) {
    if (root == null) {
        console.log('tree is empty');
        return null;
    }
    while (root.left) {
        root = root.left;
    }
    return root.data;
}

//using recursion
function findmin_recursion(root) {
    if (root == null) {
        console.log('Empty tree provided');
        return -1;
    } else if (root.left==null) {
        return root.data;
    }
    return findmin_recursion(root.left);
}


//using regular method
function findmax(root) {
    if (root == null) {
        console.log('tree is empty');
        return null;
    }
    while (root.right) {
        root = root.right;
    }
    return root.data;
}

function findmax_recursion(root) {
    if (root == null) {
        console.log('Empty tree provided');
        return -1;
    } else if (root.right==null) {
        return root.data;
    }
    return findmax_recursion(root.right);
}

module.exports = {findMin: findmin_recursion, findMax: findmax_recursion};

