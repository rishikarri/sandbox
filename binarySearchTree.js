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
        const queue = []
        const finalList = []
        
        queue.push(this.root)
        let nodeToCheck;
        while (queue.length > 0) {
            nodeToCheck = queue.shift()
            finalList.push(nodeToCheck.val)
            if (nodeToCheck.left) {
                queue.push(nodeToCheck.left)                
            }
            if(nodeToCheck.right) {
                queue.push(nodeToCheck.right)
            }
        }
        return finalList

    }
}


const test1 = new BinarySearchTree(); 
test1.insert(15)
test1.insert(10)
test1.insert(16)
test1.insert(7)
test1.insert(11)
test1.insert(4)
test1.insert(13)
test1.breadthFirstSearch()

// const foundNode = test1.find(7)
const listOfNodes = test1.breadthFirstSearch()
console.log("HI")


//             15
//         10      16
//     7      11               
// 4