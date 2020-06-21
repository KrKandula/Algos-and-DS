//this method creates a incorrect BST

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

function bst_incorrect(rootNode, data) {
    if(rootNode==null) {
      rootNode = createNode(data);
    } else if (data <= rootNode.data) {
      rootNode.right = bst_incorrect(rootNode.right, data);
    } else if (data > rootNode.data) {
      rootNode.left = bst_incorrect(rootNode.left, data);
    }
    return rootNode;
}

module.exports = bst_incorrect;