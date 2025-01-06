// takes 2 sorted arrays and merges them into 1 larger sorted array
function merge(arr, arr2) {

    const newArr = [];
    let i = 0; 
    let j = 0; 
    while (i < arr.length && j < arr2.length) {
        if (arr[i] < arr2[j]) {
            newArr.push(arr[i])
            i++; 
            
        } 
        if (arr2[j] < arr[i]) {
            newArr.push(arr2[j])
            j++;
        }
    }

    while (i < arr.length) {
        newArr.push(arr[i])
        i++;
    }

    while (j < arr2.length) {
        newArr.push(arr2[j])
        j++;
    }
    return newArr;
}


console.log('MERGED', merge([1,3,4,99], [0, 5, 19, 29]))

