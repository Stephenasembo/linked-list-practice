class LinkedList {
  constructor() {
    this.start = null;
  }
  traversal(node) {
    if (node == null || node.nextNode === null) {
      return node;
    }
    return this.traversal(node.nextNode);
  }
  append(value, node = this.start) {
    const appendedNode = new Node(value, null);
    let lastNode = this.traversal(node);
    if (!lastNode) {
      this.start = appendedNode;
    } else {
      lastNode.nextNode = appendedNode;
    }
  }
  prepend(value) {
    const newValue = new Node(value, this.start);
    this.start = newValue;
  }
  size(node = this.start) {
    if (node === null) {
      return 0;
    }
    if(node.nextNode === null) {
      return 1;
    }
    return 1 + this.size(node.nextNode);
  }
  head() {
    return this.start;
  }
  tail() {
    const lastNode = this.traversal(this.start);
    return lastNode;
  }
  at(index, node = this.start) {
    const maxSize = this.size(this.start);
    if (index < 0 || index > maxSize) {
      return null;
    }
    if (index === 0) {
      return node;
    }
    return this.at(index - 1, node.nextNode);
  }
  pop(node = this.start) {
    // Use traversal pointers for traversing the list
    let current = this.start;
    let prev = this.start;
    const lastNode = this.traversal(this.start);
    current = lastNode;
    if (current === this.start) {
      return this.start = null;
    }
    if (node.nextNode === current) {
      if (node === this.start) {
        return node.nextNode = null;
      } else {
        return node;
      }
    }
    prev = this.pop(node.nextNode);
    prev.nextNode = null;
  }
  constains(value, node = this.start) {
    if (node.value === value) {
      return true;
    }
    if (node === null) {
      return false;
    }
    return this.constains(value, node.nextNode);
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
list.append('fish');
list.append('hamster');
console.log(list.constains('fish'));