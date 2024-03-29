# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head.next is None:
            return None
        
        slow = head
        fast = head.next.next
        
        # while fast is not None and fast.next is not None:
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        fast = slow.next
        slow.next = slow.next.next
        del fast
        
        return head
