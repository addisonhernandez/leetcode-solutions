# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Iterative
        """
        stack = []
        
        while head:
            stack.append(ListNode(head.val))
            head = head.next
            
        sentinel = ListNode()
        head = sentinel
        
        while stack:
            head.next = stack.pop()
            head = head.next
        
        return sentinel.next
        """
        
        # Recursive
        if not head or not head.next:
            return head
        
        tail = head.next
        node = self.reverseList(head.next)
        tail.next = head
        head.next = None
        
        return node