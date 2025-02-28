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
    pop() {
        if (!this.head) return undefined;
        let current = this.head 
        this.length--;

        let poppedNode;

        if (this.length === 0) {
            poppedNode = this.head
            this.head = null;
            this.tail = null
            return poppedNode;
        }

        // traverse to the second last node 
        

        poppedNode = this.tail;
        this.tail.previous = null; 
        this.tail = this.tail.previous;
        this.tail.next = null;
        
        return poppedNode;
    }
}

const test1 = new DoublyLinkedList(); 

test1.push("Hi");
test1.push("Hello")
test1.push(9999)

