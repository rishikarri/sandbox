
// Take an unsorted array and return a new sorted array
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentVal = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > currentVal) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = currentVal;
    }
  
    return arr;
  }

// test results
const unsortedArr = [4, 2, 5, 17, 3, 99, 6]
const sortedArr = insertionSort(unsortedArr)
console.log('sortedList', sortedArr)
