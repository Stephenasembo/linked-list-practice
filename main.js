class LinkedList {
  constructor() {
    this.head = null;;
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
  traversal(node) {
    if (node == null || node.nextNode === null) {
      return node;
    }
    return this.traversal(node.nextNode);
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
list.append('hamster');
list.append('fish');
list.append('cow');
const test = JSON.stringify(list);
console.log(test);