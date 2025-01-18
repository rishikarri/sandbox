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

        let current = this.root;
        while (true) {
            if (val === current.val) {
                return undefined
            }
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
    find(val) {
        if (!this.root) {
            return false; 
        }

        while (true) {
            let current = this.root;
            if (val === current.val) {
                return current
            }
            if (val < current.val) {
                // search and insert left
                current = current.left; 
                if (current.val === val) {
                    return current;
                } 
            }
            if (val > current.val) {
                // search and insert right 
                current = current.right
                if (current.val == val) {
                    return current; 
                }
                return false 
            }
        }
    }
}


const test1 = new BinarySearchTree(); 
test1.insert(15)
test1.insert(10)
test1.insert(7)
test1.insert(4)
console.log("HI")

