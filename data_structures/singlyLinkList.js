// A data structure that contains a head, tail and lenght property.
// Linked lists consists of nodes, and each node has a value and
// a pointer to another node or null.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Adds a value to the end of the list.
   * @param {*} val
   * @returns {SinglyLinkedList}
   */
  push(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length += 1;
      return this;
    }

    this.tail.next = node;
    this.tail = node;
    this.length += 1;
    return this;
  }

  /**
   * Removes the last item in the list.
   */
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  /**
   * Displays all the values in the list.
   * @returns {string | undefined}
   */
  print() {
    if (!this.head) return undefined;

    let result = "";
    let current = this.head;

    while (current.next) {
      result += `[{val: ${current.val} next: ${current.next.val}}] => `;
      current = current.next;
    }

    if (current.next === null) {
      result += `[{val: ${current.val} next: ${current.next}}]`;
    }

    return result;
  }

  /**
   * Removes the first item in the list.
   */
  shift() {
    if (!this.head) return undefined;
    const current = this.head;
    this.head = current.next;
    this.length--;
    return current.val;
  }

  /**
   * Adds a new value to the head of the list.
   * @param {*} val
   */
  unShift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return this;
    }

    const current = this.head;
    this.head = node;
    this.head.next = current;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(val, index) {
    const node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }
}

const myList = new SinglyLinkedList();

// push
myList.push(0);
myList.push(1);
myList.push(2);
myList.push(3);
myList.push(4);

// pop
// myList.pop();

// shift
// myList.shift();

// unShift
myList.unShift(-1);
// myList.unShift(-2);

// set
myList.set(0, 3);

console.log(myList.print());
