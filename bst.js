//Binary Search Tree - populate
//Time complexity: O(nlog(n)) -- since like in binary search, we start
//with a search space of n, n/2, ...n/2^k, which is log(n) and we do this
//n times to build a tree with n elements. For a already built tree, 
//it is O(log(n)) for inserting an element
//Space Complexity: O(1)  -- since every iteration only one node 
//gets created


//node class
class Node{
    constructor(data){
      this.data=data;
      this.left=null;
      this.right=null;
    }
  }
  
  //input: node data
  //output: node object
  function createNode(data) {
    return new Node(data);
  }
  
//input: root node of the tree, data for the new node
//output: root node
function bst(rootNode, data) {
    if(rootNode==null) {
      rootNode = createNode(data);
    } else if (data <= rootNode.data) {
      rootNode.left = bst(rootNode.left, data);
    } else if (data > rootNode.data) {
      rootNode.right = bst(rootNode.right, data);
    }
    return rootNode;
}
  
module.exports = bst;