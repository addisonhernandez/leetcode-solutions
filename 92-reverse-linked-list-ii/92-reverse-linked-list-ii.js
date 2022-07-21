/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let temp = new ListNode(null);
  temp.next = head;
  
  let tail = temp;
  let index = 0;
  
  // Step throught the list without making changes until we reach left
  while (index < left - 1) {
    tail = tail.next;
    index++;
  }
  
  // reverse the list using a stack 
  let nextNode = tail.next;
  let stack = [];
  while (index < right) {
    stack.push(nextNode);
    nextNode = nextNode.next;
    index++;
  }
  while (stack.length) {
    tail.next = stack.pop();
    tail = tail.next;
  }
  
  // add the remaining nodes
  tail.next = nextNode;
  
  return temp.next;
};