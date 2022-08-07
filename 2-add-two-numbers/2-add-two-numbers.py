# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        head = ListNode()
        
        node = head
        carry = 0
        
        while l1 and l2:
            value = l1.val + l2.val + carry
            carry = 1 if value > 9 else 0
            node.next = ListNode(value % 10)
            node, l1, l2 = node.next, l1.next, l2.next
        
        lst = l1 if l1 else l2
        
        while lst and carry:
            value = lst.val + carry
            carry = 1 if value > 9 else 0
            node.next = ListNode(value % 10)
            node, lst = node.next, lst.next
        
        if carry:
            node.next = ListNode(1)
        if lst:
            node.next = lst
            
        return head.next