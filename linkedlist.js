class Node {
    constructor(val) {
        this.val = val; 
        this.next = null;
    }
}


const first = new Node('Hi')
first.next = new Node('There')
first.next.next = new Node('Foo')
