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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
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