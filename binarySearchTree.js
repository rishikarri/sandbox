class Node(val) {
    this.val = val; 
    this.left = null;
    this.right = null;
}


class BinarySearchTree() {
    this.root = null;

    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode
            return this; 
        }

        while (true) {
            let current = this.root.val
            if (val < current) {
                // search and insert left
                if (current.left == null) {
                    current.left = newNode
                    return this
                } 
                current = current.left; 
            }
        }


    }
}