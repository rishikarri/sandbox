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
}

const test1 = [41, 39, 33, 18, 27, 12]; 

const test2 = new MaxBinaryHeap();

test2.insert(41);
test2.insert(39);
test2.insert(33);
test2.insert(18);
test2.insert(50);

console.log("HI")


            //     50 
            // 18      39