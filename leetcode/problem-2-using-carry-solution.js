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
    let tempHead = new ListNode(0);
    let current = tempHead;
    let carry = 0; 

    while (l1 || l2 || carry) {
        const l1Val = l1 ? l1.val : 0; 
        const l2Val = l2 ? l2.val : 0; 
        const sum = l1Val + l2Val + carry; 
        carry = Math.floor(sum / 10) // 0 or 1;
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        if(l1) l1 = l1.next; 
        if (l2) l2 = l2.next;
    }
    return tempHead.next
};