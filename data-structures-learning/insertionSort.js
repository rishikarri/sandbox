
// Take an unsorted array and return a new sorted array
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const currentVal = arr[i];

        let j = i -1; 
        while (j >=0 && arr[j] > currentVal) {
            // move arr[j] one to the right by overwriting what is there             
            arr[j + 1] = arr[j]            
            j--;
            
        }


        // write current value to most left spot 
        // we can do this because the while loop stopped 
        // this means that our current value is smaller than what's left of it
        arr[j + 1] = currentVal
    }
    return arr; 
  }

// test results
const unsortedArr = [1, 2, 5, 17, 3, 99, 6]
const sortedArr = insertionSort(unsortedArr)
console.log('sortedList', sortedArr)
