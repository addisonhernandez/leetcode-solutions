/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func addWithCarry(val1, val2 int) (val, carry int) {
    val = val1 + val2
    if val > 9 {
        carry = 1
    }
    val %= 10
    return
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
    head := &ListNode{}
    
    node := head
    val, carry := 0, 0
    
    for l1 != nil && l2 != nil {
        val, carry = addWithCarry(l1.Val, l2.Val + carry)
        node.Next = &ListNode{Val: val}
        node, l1, l2 = node.Next, l1.Next, l2.Next
    }
    
    var lst *ListNode
    if l1 != nil {
        lst = l1
    } else {
        lst = l2
    }
    
    for lst != nil && carry != 0 {
        val, carry = addWithCarry(lst.Val, carry)
        node.Next = &ListNode{Val: val}
        node, lst = node.Next, lst.Next
    }
    
    if carry == 1 {
        node.Next = &ListNode{Val: 1}
    }
    if lst != nil {
        node.Next = lst
    }
    
    return head.Next
}
