/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func partition(head *ListNode, x int) *ListNode {
    lessHead := &ListNode{}
    moreHead := &ListNode{}
    
    lessTail := lessHead
    moreTail := moreHead
    
    for head != nil {
        if head.Val < x {
            lessTail.Next = &ListNode{Val: head.Val}
            lessTail = lessTail.Next
        } else {
            moreTail.Next = &ListNode{Val: head.Val}
            moreTail = moreTail.Next
        }
        head = head.Next
    }
    
    lessTail.Next = moreHead.Next
    
    return lessHead.Next
}