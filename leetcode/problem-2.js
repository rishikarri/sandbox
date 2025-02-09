/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    const nums1 = []; 
    const nums2 = []; 
        console.log('l1.head', l1.val); 
        let current = l1; 
        let current2 = l2; 
    
        while (true) {
            // loop through linkedlist and add 
            nums1.push(current.val)        
            current = current.next; 
            if (!current) {
                break;
            }
        }
    
        while (true) {
            // loop through linkedlist and add 
            nums2.push(current2.val)        
            current2 = current2.next; 
            if (!current2) {
                break;
            }
        }
    
        // reverese
    
        nums1.reverse()
        nums2.reverse()
        const number1 = BigInt(nums1.join(''))
        const number2 = BigInt(nums2.join(''))
    
        // add 
    
        // create new linked list 
        console.log(number1)
        console.log(number2)
    
        const total = number1 + number2; 
        console.log(total, 'total')
    
        const totalArr = total.toString().split('')
        totalArr.reverse()
        console.log('totalArr', totalArr)
        totalArr.forEach((num, i) => {
            totalArr[i] = Number(num); 
            
        })
    
        let tempHead = new ListNode(0);
        let current3 = tempHead;
        for(i = 0; i < totalArr.length; i++) {
            // console.log(new ListNode(totalArr[i]), 'new ListNode(totalArr[i])')
            current3.next = new ListNode(totalArr[i]);
            current3 = current3.next;
            // if (i === totalArr.length - 1) {
            //     current3.next = null;            
            // }
    
    
        }
    
        console.log('totalArr', totalArr);
        console.log(tempHead, 'tempHead')
        return tempHead.next;
        
    
        
    
        
        
    
        
    };