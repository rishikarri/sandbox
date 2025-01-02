function selectionSort(arr) { 
    for (let i = 0; i < arr.length; i++) {
        let smallestNumberIndex = 0; 
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                console.log("SMALLER NUMBER FOUND");
                smallestNumberIndex = j;
                
                // SWAP
                let temp = arr[i];
                arr[i] = arr[smallestNumberIndex];
                arr[smallestNumberIndex] = temp;
            }
        }
    }
    return arr;        
}

// test results

const sortedList = selectionSort([1, 2, 17, 3, 99, 6])
console.log('sortedList', sortedList)