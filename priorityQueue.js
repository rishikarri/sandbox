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

    sinkDown() {
        // compares root node with children until it finds the correct spot for it 
        let parentIdx = 0; 
        let leftChildIdx, rightChildIdx;

        // find where it belongs 
        while(true) {            
            leftChildIdx = 2 * parentIdx + 1; 
            rightChildIdx = 2 * parentIdx + 2; 

            let parentPriority = this.nodes[parentIdx]?.priority;
            let leftPriority = this.nodes[leftChildIdx]?.priority;
            let rightPriority = this.nodes[rightChildIdx]?.priority;  

            // filter out undefineds 
            const filteredVals = [parentPriority, leftPriority, rightPriority].filter(item => item !== undefined)

            const minNumber = Math.min(...filteredVals);

            if (minNumber === parentPriority) {
                // it's in the right spot already
                return this
            }

            if (minNumber === leftPriority) {
                swap(this.nodes, parentIdx, leftChildIdx)
                parentIdx = leftChildIdx
            } 
            if (minNumber === rightPriority) {
                swap(this.nodes, parentIdx, rightChildIdx)
                parentIdx = rightChildIdx
            }
        }
    }
    
    enqueue(val, priority) {
        const newNode =new Node(val, priority); 

        if (this.nodes.length === 0) {
            this.nodes.push(newNode)
            return this;
        }

        // put node at top of the minHeap 
        this.nodes.unshift(newNode);

        this.sinkDown();
        
        
    }
    dequeue() {
        const firstNode = this.nodes.shift()
        if (this.nodes.length > 1) {
            this.sinkDown();
        }
        return firstNode; 
    }
}

const priorityQ = new PriorityQueue()

priorityQ.enqueue('abc', 5);
priorityQ.enqueue('cde', 4);
priorityQ.enqueue('fgef', 11);
priorityQ.enqueue('weoif', 3);
priorityQ.enqueue('aweoi', 1);
console.log('HI')

            //         1
            //     3       4
            // 11      5