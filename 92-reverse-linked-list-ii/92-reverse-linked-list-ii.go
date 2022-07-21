/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseBetween(head *ListNode, left int, right int) *ListNode {
    temp := &ListNode{Next: head}
    
    tail := temp
    index := 0
    
    for index < left - 1 {
        tail = tail.Next
        index++
    }
    
    node := tail.Next
    stack := make([]*ListNode, right - left + 1)
    
    for i := 0; i < len(stack); i++ {
        stack[i] = node
        node = node.Next
    }
    for i := len(stack) - 1; i >= 0; i-- {
        tail.Next = stack[i]
        tail = tail.Next
    }
    
    tail.Next = node
    
    return temp.Next
}