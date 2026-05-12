class Node {
  constructor(key, value) {
    this.key = key;
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
  append(key, value) {
    const newNode = new Node(key, value);

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
  prepend(key, value) {
    const newNode = new Node(key, value);

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

  //Remove a node by key (xóa node theo key)
  remove(key) {
    if (!this.head) return null;

    let current = this.head;

    while (current) {
      if (current.key === key) {
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

        return current;
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

  find(key) {
    let current = this.head;

    while (current) {
      if (current.key === key) {
        return current;
      }

      current = current.next;
    }

    return null;
  }
}

class HashTable {
  constructor(capacity = 10) {
    this.capacity = capacity;
    this.size = 0;

    this.table = Array.from({ length: capacity }, () => new DoublyLinkedList());
  }

  // Hash function (hàm băm)
  // Hàm băm này sẽ nhận một chuỗi (key) và trả về một số nguyên (hash value) dựa trên nội dung của chuỗi đó.
  // Cụ thể, nó sẽ tính tổng giá trị Unicode của tất cả các ký tự trong chuỗi và sau đó lấy phần dư của tổng đó khi chia cho capacity của bảng băm để đảm bảo rằng hash value nằm trong phạm vi của bảng.
  // Ví dụ: nếu key là "abc", thì hash value sẽ là (97 + 98 + 99) % capacity, trong đó 97, 98, và 99 là giá trị Unicode của các ký tự 'a', 'b', và 'c' tương ứng.
  hash(key) {
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.capacity;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];

    const existingNode = bucket.find(key);

    if (existingNode) {
      existingNode.value = value;
      return;
    }

    bucket.append(key, value);
    this.size++;

    if (this.getLoadFactor() > 0.75) {
      this.resize();
    }
  }
  get(key) {
    const index = this.hash(key);

    const bucket = this.table[index];

    const node = bucket.find(key);

    return node ? node.value : undefined;
  }

  has(key) {
    const index = this.hash(key);

    const bucket = this.table[index];

    return bucket.find(key) !== null;
  }

  remove(key) {
    const index = this.hash(key);

    const bucket = this.table[index];

    const removedNode = bucket.remove(key);

    if (removedNode) {
      this.size--;

      return removedNode.value;
    }

    return undefined;
  }

  keys() {
    const keysArray = [];

    for (const bucket of this.table) {
      let current = bucket.head;

      while (current) {
        keysArray.push(current.key);

        current = current.next;
      }
    }

    return keysArray;
  }

  values() {
    const valuesArray = [];

    for (const bucket of this.table) {
      let current = bucket.head;

      while (current) {
        valuesArray.push(current.value);

        current = current.next;
      }
    }

    return valuesArray;
  }

  entries() {
    const entriesArray = [];

    for (const bucket of this.table) {
      let current = bucket.head;

      while (current) {
        entriesArray.push([current.key, current.value]);

        current = current.next;
      }
    }

    return entriesArray;
  }

  getLoadFactor() {
    return this.size / this.capacity;
  }

  resize() {
    const oldTable = this.table;

    this.capacity *= 2;
    this.size = 0;

    this.table = Array.from(
      { length: this.capacity },
      () => new DoublyLinkedList(),
    );

    for (const bucket of oldTable) {
      let current = bucket.head;

      while (current) {
        this.set(current.key, current.value);
        current = current.next;
      }
    }
  }
}
