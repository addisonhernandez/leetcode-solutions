/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
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