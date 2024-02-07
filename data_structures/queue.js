// A Queu is an abstract data structure.
// It follows the principle FIFO.
// FIFO: First In First Out. The First element added to the queue,
// will be the first element removed from the queue.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
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
    const current = this.first;
    this.first = current.next;
    this.length--;
    return current.val;
  }
}

const myQueue = new Queue();

myQueue.push(0);
myQueue.push(1);
myQueue.push(2);

myQueue.pop();

console.log(myQueue);
