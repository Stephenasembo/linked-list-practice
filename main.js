class LinkedList {
  constructor() {
    this.start = null;
  }
  // Traverse the linked list and return the last node at the end
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
  // Test if value exists in the list
  contains(value, node = this.start) {
    if (node.value === value) {
      return true;
    }
    if (node === null) {
      return false;
    }
    return this.contains(value, node.nextNode);
  }
  find(value, node = this.start) {
    if (node.value === value) {
      return this.findIndex(node);
    }
    if (node === null) {
      return null;
    }
    return this.find(value, node.nextNode);
  }
  findIndex(nodeValue, node = this.start) {
    if (node === nodeValue) {
      return 0;
    }
    return 1 + this.findIndex(nodeValue, node.nextNode);
  }
  // Create a string containing values in the list
  toString(node = this.start) {
    if(node === null) {
      return 'null';
    }
    if (node.nextNode === null) {
      return `(${node.value}) -> null`;
    }
    return `(${node.value}) -> ${this.toString(node.nextNode)}`;
  }

  insertAt(value, index, node = this.start, prev) {
    if (index > this.size()) {
      return;
    }
    if (index === 1) {
      let newNode = new Node(value);
      newNode.nextNode = node.nextNode;
      node.nextNode = newNode;
      return newNode;
    }
    return this.insertAt(value, index - 1, node.nextNode)
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
list.insertAt('cow', 1);
console.log(list.toString());
