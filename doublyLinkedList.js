class Node {
    constructor(val) {
        this.val = val; 
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        this.length++;
        const node = new Node(val)
        if (this.length == 1) {
            this.head = node;
            this.tail = node; 
        } else {
            this.tail.next = node; 
            this.tail.next.previous = this.tail;
            this.tail = node; 
        }

        return this;
    }
}