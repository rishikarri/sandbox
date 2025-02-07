// Leetcode problem 27

// the trick is to look for numbers that don't equal the val 
// then when we find one, overwrite it to the first location of the array 
// then keep moving forward until we find another value that doesn't equal our val

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const arr = [3, 2, 2, 3, 1, 3]

const removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {        
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};


            
removeElement(arr, 3)

console.log('arr', arr)