class Node<T> {
  public next: Node<T> | null = null;
  public prev: Node<T> | null = null;

  constructor(public data: T) {}
}

interface ILinkedList<T> {
  pushHead(data: T): Node<T>;
  pushTail(data: T): Node<T>;
  popHead(): Node<T>;
  popTail(): Node<T>;
  peekHead(): T;
  peekTail(): T;
}

class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  public size: number = 0;
  
  public pushHead(data: T): Node<T> {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size += 1;
    return node;
  }
  
  public pushTail(data: T): Node<T> {
    const node = new Node(data);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size += 1;
    return node;
  }
  
  public popHead(): Node<T> {
    if (!this.head) {
      return null;
    }
    const node = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null; // do I need to null this.head.prev.next?
    }
    this.size -= 1;
    return node;
  }
  
  public popTail(): Node<T> {
    if (!this.tail) {
      return null;
    }
    const node = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size -= 1;
    return node;
  }
  
  public peekHead(): T {
    if (!this.head) {
      return null;
    }
    return this.head.data;
  }

  public peekTail(): T {
    if (!this.tail) {
      return null;
    }
    return this.tail.data
  }
}

function maxResult(nums: number[], k: number): number {
  const deq = new LinkedList<number>();
  
  deq.pushHead(nums.length - 1);
  
  for (let i = nums.length - 2; i >= 0; i--) {
    if (deq.peekHead() - i > k) {
      deq.popHead();
    }
    
    nums[i] += nums[deq.peekHead()];
    
    while (deq.size && nums[deq.peekTail()] <= nums[i]) {
      deq.popTail();
    }
    
    deq.pushTail(i)
  }
  
  return nums[0];
};