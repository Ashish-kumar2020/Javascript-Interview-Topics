// LRU = Least Recently Used,An LRU cache is a cache that has a fixed capacity. When the cache becomes full and you need to add something new, it removes the item that hasn’t been used for the longest time.

class Node {
  constructor(key, value) {
    this.value = value;
    this.key = key;
    this.previousNode = null;
    this.nextNode = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = null;
    this.tail = null;
  }

  addToTail(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    node.previousNode = this.tail;
    node.nextNode = null;
    this.tail.nextNode = node;
    this.tail = node;
  }

  removeNode(node) {
    if (node === this.head && node === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    if (node === this.head) {
      this.head = node.nextNode;
      this.head.previousNode = null;
      return;
    }
    if (node === this.tail) {
      this.tail = node.previousNode;
      this.tail.nextNode = null;
      return;
    }
    node.previousNode.nextNode = node.nextNode;
    node.nextNode.previousNode = node.previousNode;
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    const node = this.cache.get(key);
    this.removeNode(node);
    this.addToTail(node);
    return node.value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;
      this.removeNode(node);
      this.addToTail(node);
      return;
    }
    if (this.cache.size < this.capacity) {
      const node = new Node(key, value);
      this.addToTail(node);
      this.cache.set(key, node);
      return;
    }
    if(this.cache.size === this.capacity){
        const lruNode = this.head
        this.removeNode(lruNode);
        this.cache.delete(lruNode.key);
        const node = new Node(key,value);
        this.cache.set(key,node);
        this.addToTail(node);
        return;
    }
  }
}


const cache = new LRUCache(2);

cache.put(1, "a");
cache.put(2, "b");

console.log(cache.get(1)); // "a"

cache.put(3, "c");

console.log(cache.get(2)); // -1
console.log(cache.get(3)); // "c"
console.log(cache.get(1)); // "a"