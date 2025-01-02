function bubbleSort(arr) { // mutates original array 

    arrCopy = arr.slice();
    // we can reduce the number of comparisons by 1 each time
    // this is because we know that the biggest number "bubbled" to the top 
    // so each time we go through, we have one less number we need to compare against
    let comparisonsPerOuterLoop = 0;
    for (let i = arr.length; i > 0; i--) {        
        const num1 = arr[i];
        let swapCounter = 0;
        for (let j = 0; j < i - 1; j++) {
            comparisonsPerOuterLoop++; 
            const num2 = arr[j];
            const num3 = arr[j+1]

            if (num2 > num3) {
                // swap
                arr[j] = num3;
                arr[j+1] = num2;

                console.log("SWAP")
                swapCounter++;
            }

        
            
            const logData = {num1, num2, num3}
        }
        
        console.log('Array Current Order Outer LOOP', arr) 
        console.log('Comparisons per outer loop', comparisonsPerOuterLoop) 

        if (swapCounter === 0) {
            // no need to finish the algo
            console.log('finished sorting early')
            return arr; 
        }

        // reset 
        swapCounter = 0;
        comparisonsPerOuterLoop = 0;
        
    }    

    return arr;
}

// test results

const sortedList = bubbleSort([1, 2, 17, 3, 99, 6])
console.log('sortedList', sortedList)