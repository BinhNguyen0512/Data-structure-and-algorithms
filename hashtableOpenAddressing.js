class HashTable {
  constructor(capacity = 7) {
    // size của array
    this.capacity = capacity;

    // số lượng key-value hiện tại
    this.size = 0;

    // table chính
    this.table = new Array(this.capacity);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue % this.capacity;
  }

  probe(x) {
    return x;
  }

  set(key, value) {
    if (this.loadFactor() > 0.7) {
      this.resize();
    }

    const hash = this.hash(key);
    let index = hash;
    let x = 0;

    while (
      this.table[index] !== undefined &&
      this.table[index] !== this.DELETED
    ) {
      const [currentKey] = this.table[index];

      if (currentKey === key) {
        this.table[index][1] = value;
        return;
      }

      x++;
      index = (hash + this.probe(x)) % this.capacity;
    }

    this.table[index] = [key, value];
    this.size++;
  }

  get(key) {
    const hash = this.hash(key);

    let index = hash;

    let x = 0;

    // loop đến khi gặp ô trống
    while (this.table[index] !== undefined) {
      const [currentKey, currentValue] = this.table[index];

      // tìm thấy key
      if (currentKey === key) {
        return currentValue;
      }

      x++;

      index = (hash + this.probe(x)) % this.capacity;
    }

    // không tìm thấy
    return undefined;
  }

  remove(key) {
    const hash = this.hash(key);
    let index = hash;
    let x = 0;

    while (this.table[index] !== undefined) {
      if (this.table[index] !== this.DELETED) {
        const [currentKey] = this.table[index];

        if (currentKey === key) {
          this.table[index] = this.DELETED;
          this.size--;
          return true;
        }
      }

      x++;
      index = (hash + this.probe(x)) % this.capacity;
    }

    return false;
  }

  loadFactor() {
    return this.size / this.capacity;
  }

  resize() {
    const oldTable = this.table;

    this.capacity = this.capacity * 2;
    this.table = new Array(this.capacity);
    this.size = 0;

    for (const item of oldTable) {
      if (item !== undefined && item !== this.DELETED) {
        const [key, value] = item;
        this.set(key, value);
      }
    }
  }
}

const ht = new HashTable();

ht.set("cat", "meow");
ht.set("tac", "collision");
ht.set("dog", "gau");

console.log(ht.get("cat")); // meow
console.log(ht.get("tac")); // collision

ht.remove("cat");

console.log(ht.get("cat")); // undefined
console.log(ht.get("tac")); // collision
console.log(ht.table);
