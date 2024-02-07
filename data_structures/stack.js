// A stack is an abstract data structure.
// It follows the principle LIFO.
// LIFO: Last In First Out. The last element added to the stack,
// will be the first element removed from the stack.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
      this.size++;
      return this;
    }

    this.last.next = node;
    this.last = node;
    this.size++;
    return this;
  }

  pop() {
    if (!this.first) return undefined;

    let current = this.first;
    let newLast = current;

    while (current.next) {
      newLast = current;
      current = current.next;
    }

    this.last = newLast;
    this.last.next = null;
    this.size--;

    return this;
  }
}

const myStack = new Stack();

myStack.push(0);
myStack.push(1);
myStack.push(2);

// myStack.pop();

console.log(myStack);
