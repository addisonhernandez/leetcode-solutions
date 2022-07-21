# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        temp = ListNode()
        temp.next = head
        
        tail = temp
        index = 0
        
        while index < left - 1:
            tail = tail.next
            index += 1
        
        node = tail.next
        stack = []
        
        while index < right:
            stack.append(node)
            node = node.next
            index += 1
        
        while stack:
            tail.next = stack.pop()
            tail = tail.next
        
        tail.next = node
        
        return temp.next