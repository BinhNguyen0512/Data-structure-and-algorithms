class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //Thêm node vào cuối danh sách
  append(value) {
    const newNode = new Node(value);

    //Nếu mà head không có thì tức là danh sách đang rỗng, thì mình sẽ gán head và tail đều bằng newNode
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //Nếu mà head đã có rồi thì mình sẽ gán next của tail hiện tại bằng newNode, gán prev của newNode bằng tail hiện tại, và sau đó gán tail bằng newNode
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.size++;
  }

  //Thêm node vào đầu danh sách
  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;

      this.head.prev = newNode;

      this.head = newNode;
    }

    this.size++;
  }

  // In-order traversal (duyệt theo thứ tự)
  printForward() {
    let current = this.head;

    while (current) {
      console.log(current.value);

      current = current.next;
    }
  }

  // Reverse-order traversal (duyệt ngược)
  printBackward() {
    let current = this.tail;

    while (current) {
      console.log(current.value);

      current = current.prev;
    }
  }

  //Remove the first node (xóa node đầu tiên)
  removeFirst() {
    if (!this.head) return null;

    const removedNode = this.head;

    // chỉ có 1 node
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.size--;

    return removedNode.value;
  }

  //Remove the last node (xóa node cuối cùng)
  removeLast() {
    if (!this.tail) return null;

    const removedNode = this.tail;

    // chỉ có 1 node
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.size--;

    return removedNode.value;
  }

  //Remove a node by value (xóa node theo giá trị)
  remove(value) {
    if (!this.head) return null;

    let current = this.head;

    while (current) {
      if (current.value === value) {
        // remove head
        if (current === this.head) {
          return this.removeFirst();
        }

        // remove tail
        if (current === this.tail) {
          return this.removeLast();
        }

        // remove middle
        current.prev.next = current.next;
        current.next.prev = current.prev;

        this.size--;

        return current.value;
      }

      current = current.next;
    }

    return null;
  }

  //Remove a node by index (xóa node theo chỉ số)
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    // remove head
    if (index === 0) {
      return this.removeFirst();
    }

    // remove tail
    if (index === this.size - 1) {
      return this.removeLast();
    }

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }

    current.prev.next = current.next;
    current.next.prev = current.prev;

    this.size--;

    return current.value;
  }

  //Insert a node at a specific index (chèn node tại một chỉ số cụ thể)
  insertAt(index, value) {
    // validate
    if (index < 0 || index > this.size) {
      return null;
    }

    // insert head
    if (index === 0) {
      this.prepend(value);
      return;
    }

    // insert tail
    if (index === this.size) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);

    let current;

    // optimize traversal
    if (index < this.size / 2) {
      current = this.head;

      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;

      for (let i = this.size - 1; i >= index; i--) {
        current = current.prev;
      }
    }

    // nối pointer
    newNode.prev = current.prev;
    newNode.next = current;

    current.prev.next = newNode;
    current.prev = newNode;

    this.size++;
  }
}

// const list = new DoublyLinkedList();

// list.append(1);
// list.append(2);
// list.append(3);

// list.prepend(0);

// console.log("Forward");
// list.printForward();

// console.log("Backward");
// list.printBackward();

// console.log(list);

const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);

list.printForward();

console.log("remove first");
list.removeFirst();
list.printForward();

console.log("remove last");
list.removeLast();
list.printForward();

console.log("remove value = 2");
list.remove(2);
list.printForward();

list.append(5);
list.append(6);
list.append(7);

console.log("removeAt(1)");
list.removeAt(1);

list.printForward();

list.insertAt(2, 3);

list.printForward();
