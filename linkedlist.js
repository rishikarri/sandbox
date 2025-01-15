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
    shift() {
        if (!this.head) return undefined; 
        const returnNode = this.head; 
        this.head = this.head.next;
        this.length--; 
        return returnNode;
    }
    unshift(val) {
        this.length++;
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return;
        }
        newNode.next = this.head;
        this.head = newNode; 
        
    }
    get(index) {
        if (index < 0) return null; 
        if (index > this.length) return null; 

        let counter = 0; 
        let current = this.head;
        while (counter !== index) {
            current = current.next
            counter++; 
        }
        // we know we have reached the index 
        return current; 

    }
}


// const first = new Node('Hi')
// first.next = new Node('There')
// first.next.next = new Node('Foo')

const test1 = new SinglyLinkedList(); 

test1.push("Hi");
test1.push("Hello")
test1.push(9999)

