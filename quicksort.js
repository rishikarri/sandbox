function pivot(arr, pivotIndex = 0) {
    let pivotIndexMover = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[pivotIndex]) {
            pivotIndexMover++;
        }
        const element = arr[i];
        
    }
}

const testArr = [45, 1, 5, 912, 39]

pivot(testArr, 0)