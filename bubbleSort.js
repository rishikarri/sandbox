function bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {        
        const num1 = arr[i];
        for (let j = 0; j < arr.length; j++) {
            const num2 = arr[j];
            const num3 = arr[j+1]

            if (num2 > num3) {
                // swap
                arr[j] = num3;
                arr[j+1] = num2;

                console.log("SWAPPED")
            }
            
            const logData = {num1, num2, num3}
    
            console.log('Array Current Order', arr) 
            
        }
        
    }    
}

// test results

const sortedList = bubbleSort([2, 4, 3, 90, 5, 18, 1, 98])
console.log('sortedList', sortedList)