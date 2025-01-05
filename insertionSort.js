
// Take an unsorted array and return a new sorted array
function insertionSort(arr) { 
    const arrCopy = arr.slice(); // copy the array so we don't mutate the original arr

    for (let i = 0; i < arrCopy.length; i++) {
        
        for (let j = i + 1; j < arrCopy.length; j++) {
        
        }

        
    }
    return arrCopy;        
}

// test results
const unsortedArr = [1, 2, 17, 3, 99, 6]
const sortedArr = insertionSort(unsortedArr)
console.log('sortedList', sortedArr)
