class Node {
    constructor(val) {
        this.val = val; 
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode
            return this; 
        }

        while (true) {
            let current = this.root;
            if (val < current.val) {
                // search and insert left
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                } 
                current = current.left; 
            }
            if (val > current.val) {
                // search and insert right 
                if (current.right == null) {
                    current.right = newNode; 
                    return this; 
                }
                current = current.right
            }
        }


    }
}


const test1 = new BinarySearchTree(); 
test1.insert(15)
test1.insert(10)
console.log("HI")

