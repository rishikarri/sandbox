class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}


class PriorityQueue {
    constructor() {
        this.values = [];
    }
    
    insert(element) {
        this.values.push(element);
        this.bubbleUp()
    }
    
    bubbleUp() {
        let idx = this.values.length - 1;    
        let parentIdx = Math.floor((idx - 1) / 2); 
        
        while (idx > 0) {
            parentIdx = Math.floor((idx - 1) / 2)
            if (this.values[idx] > this.values[parentIdx]) {
                swap(this.values, idx, parentIdx);
            }
            idx = parentIdx; 
        }

    }
    enqueue(node) {
        if (this.values.length === 0) {
            this.values.push(node)
            return this;
        }
        
        let parentIdx = 0; 
        let leftChildIdx, rightChildIdx;

        while(true) {            
            leftChildIdx = 2 * parentIdx + 1; 
            rightChildIdx = 2 * parentIdx + 2; 

            let parentVal = this.values[parentIdx]
            let leftVal = this.values[leftChildIdx]
            let rightVal = this.values[rightChildIdx]  

            // filter out undefineds 
            const filteredVals = [parentVal, leftVal, rightVal].filter(item => item !== undefined)

            const minNumber = Math.min(...filteredVals);

            if (minNumber === parentVal) {
                return this
            }

            if (minNumber === leftVal) {
                swap(this.values, parentIdx, leftChildIdx)
                parentIdx = leftChildIdx
            } 
            if (minNumber === rightVal) {
                swap(this.values, parentIdx, rightChildIdx)
                parentIdx = rightChildIdx
            }
        }
    }
}