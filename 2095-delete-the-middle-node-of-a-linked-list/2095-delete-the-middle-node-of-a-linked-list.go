/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteMiddle(head *ListNode) *ListNode {
    sentinel := &ListNode{ Next: head }
    
    fast := head
    slow := sentinel
    
    for fast != nil && fast.Next != nil {
        fast = fast.Next.Next
        slow = slow.Next
    }
    
    slow.Next = slow.Next.Next
    return sentinel.Next
}