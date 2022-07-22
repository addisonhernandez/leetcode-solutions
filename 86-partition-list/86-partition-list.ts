/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function partition(head: ListNode | null, x: number): ListNode | null {
  const lessHead = new ListNode();
  const moreHead = new ListNode();
  
  let lessTail = lessHead;
  let moreTail = moreHead;
  
  while (head) {
    if (head.val < x) {
      lessTail.next = new ListNode(head.val);
      lessTail = lessTail.next;
    } else {
      moreTail.next = new ListNode(head.val);
      moreTail = moreTail.next;
    }
    head = head.next;
  }
  
  lessTail.next = moreHead.next;
  
  return lessHead.next;
};