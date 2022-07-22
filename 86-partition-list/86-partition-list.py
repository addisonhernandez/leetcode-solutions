# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        less_head = ListNode()
        more_head = ListNode()
        
        less_tail, more_tail = less_head, more_head
        
        while head:
            if head.val < x:
                less_tail.next = ListNode(head.val)
                less_tail = less_tail.next
            else:
                more_tail.next = ListNode(head.val)
                more_tail = more_tail.next
            head = head.next
        
        less_tail.next = more_head.next
        
        return less_head.next