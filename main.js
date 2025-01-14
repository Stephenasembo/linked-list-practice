class LinkedList {
  constructor() {
    this.head = null;;
  }
  traversal(node) {
    if (node == null || node.nextNode === null) {
      return node;
    }
    return this.traversal(node.nextNode);
  }
  append(value, node = this.head) {
    const appendedNode = new Node(value, null);
    let lastNode = this.traversal(node);
    if (!lastNode) {
      this.head = appendedNode;
    } else {
      lastNode.nextNode = appendedNode;
    }
  }
  prepend(value) {
    const newValue = new Node(value, this.head);
    this.head = newValue;
  }
  size(node = this.head) {
    if (node === null) {
      return 0;
    }
    if(node.nextNode === null) {
      return 1;
    }
    return 1 + this.size(node.nextNode);
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();
list.append('dog');
console.log(list.size());