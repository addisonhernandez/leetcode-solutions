/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseList(head *ListNode) *ListNode {
    if head == nil || head.Next == nil {
        return head
    }
    
    tail := head.Next
    node := reverseList(head.Next)
    
    tail.Next = head
    head.Next = nil
    
    return node
}