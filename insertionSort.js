
// Take an unsorted array and return a new sorted array
function insertionSort(arr) { 
    const arrCopy = arr.slice(); // copy the array so we don't mutate the original arr

    for (let i = 0; i < arrCopy.length; i++) {
        let itemToSort = i + 1; 
        let swapSpot = itemToSort;
        for (let j = i; j >= 0; j--) {
            if (arrCopy[itemToSort] < arrCopy[j]) {
                // update swap spot
                swapSpot = j;
                

                // const 
                
            }            
        }

        if (swapSpot !== itemToSort) {
            const temp = arrCopy[swapSpot];
            arrCopy[swapSpot] = arrCopy[itemToSort];
            arrCopy[itemToSort] = arrCopy[swapSpot];
            console.log("SWAP")
        }
        
        // if (itemToSort )
        
        

        
    }
    return arrCopy;        
}

// test results
const unsortedArr = [1, 2, 17, 3, 99, 6]
const sortedArr = insertionSort(unsortedArr)
console.log('sortedList', sortedArr)
