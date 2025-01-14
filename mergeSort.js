// takes 2 sorted arrays and merges them into 1 larger sorted array
function merge(arr, arr2) {
	const newArr = [];
	let i = 0;
	let j = 0;
	while (i < arr.length && j < arr2.length) {
		if (arr[i] < arr2[j]) {
			newArr.push(arr[i]);
			i++;
		}
		if (arr2[j] < arr[i]) {
			newArr.push(arr2[j]);
			j++;
		}
	}

	while (i < arr.length) {
		newArr.push(arr[i]);
		i++;
	}

	while (j < arr2.length) {
		newArr.push(arr2[j]);
		j++;
	}
	return newArr;
}


function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

// Example usage:
const testArr = [2, 1289, 1, 44, 912, 129, 11, 9];
const sortedArr = mergeSort(testArr);
console.log(sortedArr);
console.log('hi')
// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]

// breakIntoArrsOf1([2, 1289, 1, 44, 12, 390, 1]);
// console.log("MERGED", merge([1, 3, 4, 99], [0, 5, 19, 29]));
