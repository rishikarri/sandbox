
// Take an unsorted array and return a new sorted array
function selectionSort(arr) { 
    const arrCopy = arr.slice(); // copy the array so we don't mutate the original arr

    for (let i = 0; i < arrCopy.length; i++) {
        let smallestNumberIndex = i; 
        console.log('*****')
        console.log("I iteration:", i)
        console.log('arrCopy', arrCopy)
        for (let j = i + 1; j < arrCopy.length; j++) {
            console.log('J iteration:', j)
            if (arrCopy[smallestNumberIndex] > arrCopy[j]) {
                console.log("SMALLER NUMBER FOUND. arrCopy[j]", arrCopy[j]);
                smallestNumberIndex = j;
                
            }
        }
        if (smallestNumberIndex !== i) {
            // SWAP
            var temp = arrCopy[i];
            arrCopy[i] = arrCopy[smallestNumberIndex];
            arrCopy[smallestNumberIndex] = temp;
            
        }
        
    }
    return arrCopy;        
}

// test results
const unsortedArr = [1, 2, 17, 3, 99, 6]
const sortedArr = selectionSort(unsortedArr)
console.log('sortedList', sortedArr)
