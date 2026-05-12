class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  findMin() {
    if (this.isEmpty()) return null;

    let current = this.root;

    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  findMax() {
    if (this.isEmpty()) return null;

    let current = this.root;

    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }

  getSize(node = this.root) {
    if (node === null) return 0;

    return 1 + this.getSize(node.left) + this.getSize(node.right);
  }

  getHeight(node = this.root) {
    if (node === null) return -1;

    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);

    return 1 + Math.max(leftHeight, rightHeight);
  }

  insert(data) {
    const newNode = new Node(data);

    // CASE 1: tree rỗng
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      // nhỏ hơn => đi trái
      if (data < current.data) {
        // nếu left trống => insert
        if (current.left === null) {
          current.left = newNode;
          return;
        }

        // tiếp tục đi trái
        current = current.left;
      }

      // lớn hơn => đi phải
      else if (data > current.data) {
        // nếu right trống => insert
        if (current.right === null) {
          current.right = newNode;
          return;
        }

        // tiếp tục đi phải
        current = current.right;
      }

      // duplicate
      else {
        return;
      }
    }
  }

  search(data) {
    let current = this.root;

    while (current !== null) {
      // FOUND
      if (data === current.data) {
        return true;
      }

      // nhỏ hơn => đi trái
      if (data < current.data) {
        current = current.left;
      }

      // lớn hơn => đi phải
      else {
        current = current.right;
      }
    }

    return false;
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    // Không tìm thấy node cần xoá
    if (node === null) {
      return null;
    }

    // data nhỏ hơn node hiện tại => đi trái
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }

    // data lớn hơn node hiện tại => đi phải
    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }

    // Tới đây nghĩa là data === node.data
    // => đã tìm thấy node cần xoá

    // CASE 1: leaf node
    if (node.left === null && node.right === null) {
      return null;
    }

    // CASE 2A: chỉ có right child
    if (node.left === null) {
      return node.right;
    }

    // CASE 2B: chỉ có left child
    if (node.right === null) {
      return node.left;
    }

    // CASE 3: có đủ 2 children
    const successor = this.findMinNode(node.right);

    node.data = successor.data;

    node.right = this.removeNode(node.right, successor.data);

    return node;
  }

  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }

    return node;
  }

  inorder(node = this.root) {
    if (node === null) return;

    this.inorder(node.left);

    console.log(node.data);

    this.inorder(node.right);
  }

  preorder(node = this.root) {
    if (node === null) return;

    console.log(node.data);

    this.preorder(node.left);

    this.preorder(node.right);
  }

  postorder(node = this.root) {
    if (node === null) return;

    this.postorder(node.left);

    this.postorder(node.right);

    console.log(node.data);
  }
}
