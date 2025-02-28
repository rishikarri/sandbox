// Takes an array of numbers 
// and returns the sum of the last 2 numbers in the array
function sumLast2(arr) {
    const num1 = arr[arr.length - 1]
    const num2 = arr[arr.length - 2]

    const sum = num1 + num2; 

    return sum; 
}

function sumLast2LessEfficient(arr) {
    let num1;
    let num2; 
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) { // come across the last item 
            num1 = arr[i]
        }

        if (i === arr.length - 2) { // come across the second to last item 
            num2 = arr[i]
        }
        
    }

    const sum = num1 + num2; 

    return sum; 
}






const arrToSum = [1, 2, 6, 19, 2222, 12, 28, 29, 1, 3, 9, 1, 3, 4] // should return 7 

const result = sumLast2LessEfficient(arrToSum);

console.log(result);

