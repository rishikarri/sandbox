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

        let current = this.root;
        while (true) {
            if (val === current.val) {
                return current
            }
            if (val < current.val) {
                if (current.left === null) {
                    return false; 
                }
                current = current.left; 

            }
            if (val > current.val) {
                if (current.right === null) {
                    return false; 
                }

                current = current.right
            }
        }
    }
    breadthFirstSearch() {
        const visitedNodes = []
        const finalList = []
        
        visitedNodes.unshift(this.root)
        let nodeToCheck;
        while (visitedNodes.length > 0) {
            nodeToCheck = visitedNodes.pop()
            finalList.push(nodeToCheck.val)
            if (nodeToCheck.left) {
                visitedNodes.unshift(nodeToCheck.left)                
            }
            if(nodeToCheck.right) {
                visitedNodes.unshift(nodeToCheck.left)
            }
        }
        return finalList

    }
}


const test1 = new BinarySearchTree(); 
test1.insert(15)
test1.insert(10)
test1.insert(7)
test1.insert(4)
const foundNode = test1.find(7)
console.log("HI")

