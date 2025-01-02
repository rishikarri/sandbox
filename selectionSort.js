
// Take an unsorted array and return a new sorted array
function selectionSort(arr) { 
    const arrCopy = arr.slice(); // copy the array so we don't mutate the original arr

    for (let i = 0; i < arrCopy.length; i++) {
        let smallestNumberIndex = 0; 
        for (let j = i + 1; j < arrCopy.length; j++) {
            if (arrCopy[i] > arrCopy[j]) {
                console.log("SMALLER NUMBER FOUND");
                smallestNumberIndex = j;
                
                // SWAP
                let temp = arrCopy[i];
                arrCopy[i] = arrCopy[smallestNumberIndex];
                arrCopy[smallestNumberIndex] = temp;
            }
        }
    }
    return arrCopy;        
}

// test results
const unsortedArr = [1, 2, 17, 3, 99, 6]
const sortedArr = selectionSort(unsortedArr)
console.log('sortedList', sortedArr)
