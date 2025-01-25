function swap(arr, index1, index2) {
    // Use a temporary variable to store the value at index1
    const temp = arr[index1];
  
    // Assign the value at index2 to index1
    arr[index1] = arr[index2];
  
    // Assign the temporary value to index2
    arr[index2] = temp;
}
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}


class PriorityQueue {
    constructor() {
        this.nodes = [];
    }
    
    enqueue(val, priority) {
        const newNode =new Node(val, priority); 

        if (this.nodes.length === 0) {
            this.nodes.push(newNode)
            return this;
        }

        // put node at top of the minHeap 
        this.nodes.unshift(newNode);
        
        let parentIdx = 0; 
        let leftChildIdx, rightChildIdx;

        // find where it belongs 
        while(true) {            
            leftChildIdx = 2 * parentIdx + 1; 
            rightChildIdx = 2 * parentIdx + 2; 

            let parentVal = this.nodes[parentIdx]?.val;
            let leftVal = this.nodes[leftChildIdx]?.val;
            let rightVal = this.nodes[rightChildIdx]?.val;  

            // filter out undefineds 
            const filteredVals = [parentVal, leftVal, rightVal].filter(item => item !== undefined)

            const minNumber = Math.min(...filteredVals);

            if (minNumber === parentVal) {
                // it's in the right spot already
                return this
            }

            if (minNumber === leftVal) {
                swap(this.nodes, parentIdx, leftChildIdx)
                parentIdx = leftChildIdx
            } 
            if (minNumber === rightVal) {
                swap(this.nodes, parentIdx, rightChildIdx)
                parentIdx = rightChildIdx
            }
        }
    }
}

const priorityQ = new PriorityQueue()

priorityQ.enqueue(2);
priorityQ.enqueue(3);
priorityQ.enqueue(4);
priorityQ.enqueue(7);
priorityQ.enqueue(1);
console.log('HI')