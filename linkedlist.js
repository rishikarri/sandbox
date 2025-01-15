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
    push(val) {
        this.length++;
        const node = new Node(val)
        if (this.length == 1) {
            this.head = node;
            this.tail = node; 
        } else {
            this.tail.next = node; 
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
        while (current.next != this.tail) {
            console.log(current.val);
            current = current.next; 
        }

        poppedNode = this.tail;
        this.tail = current;
        delete this.tail.next;
        this.tail.next = null;
        
        return poppedNode;
    }
}


// const first = new Node('Hi')
// first.next = new Node('There')
// first.next.next = new Node('Foo')

const test1 = new SinglyLinkedList(); 

test1.push("Hi");
test1.push("Hello")
test1.push(9999)

