function swap(arr, index1, index2) {
    // Use a temporary variable to store the value at index1
    const temp = arr[index1];
  
    // Assign the value at index2 to index1
    arr[index1] = arr[index2];
  
    // Assign the temporary value to index2
    arr[index2] = temp;
  }

  
class MaxBinaryHeap {
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
    extractMax() {
        swap(this.values, 0, this.values.length -1);
        const returnVal = this.values.pop();
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

            const maxNumber = Math.max(...filteredVals);

            if (maxNumber === parentVal) {
                return returnVal
            }

            if (maxNumber === leftVal) {
                swap(this.values, parentIdx, leftChildIdx)
                parentIdx = leftChildIdx
            } 
            if (maxNumber === rightVal) {
                swap(this.values, parentIdx, rightChildIdx)
                parentIdx = rightChildIdx
            }
        }
    }
}

const test1 = [41, 39, 33, 18, 27, 12]; 

const test2 = new MaxBinaryHeap();

test2.insert(41);
test2.insert(39);
test2.insert(33);
test2.insert(18);
test2.insert(50);
const maxNode = test2.extractMax();

console.log("HI")

                        // 50 
                //     41          33
                // 18      39