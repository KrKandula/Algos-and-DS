//Breadth first traversal
// (or) Level order traversal
//input: tree like below
//         25
//     5           30
// 2     10      28    35
//     8    15
//output: 25, 5, 30, 2, 10, 28, 35, 8, 15

const bst = require('./bst');
const root = bst(null, 25);

bst(root, 5);
bst(root, 30);
bst(root, 2);
bst(root, 28);
bst(root, 10);
bst(root, 15);
bst(root, 8);
bst(root, 35);

let queue = [];
queue.push(root);
bfs();

function bfs () {
    while(queue.length) {
        let node = queue.shift();
        console.log(node.data);
        if (node.left != null)
            queue.push(node.left);
        if (node.right != null)
            queue.push(node.right);
    }
}