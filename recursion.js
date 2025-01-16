
function factorial(x) {
    if (x === 0) {
        return 1        
    }
    return x * factorial(x - 1)
}


const factorial5 = factorial(5); 

console.log('factorial5', factorial5)