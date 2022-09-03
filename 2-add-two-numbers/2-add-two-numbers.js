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
    const sentinel = new ListNode()
    
    let node = sentinel
    
    let carry = 0
    
    while (l1 || l2) {
        let sum = carry
        if (l1) sum += l1.val
        if (l2) sum += l2.val
        carry = sum > 9 ? 1 : 0
        
        node.next = new ListNode(sum % 10)
        node = node.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    
    if (carry) {
        node.next = new ListNode(1)
    }
    
    return sentinel.next
};