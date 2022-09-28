/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution 
{
    public ListNode RemoveNthFromEnd(ListNode head, int n) 
    {
        ListNode fast = head;
        ListNode slow = head;
        
        for (int i = 0; i < n; i++) 
        {
            fast = fast.next;
        }
        
        if (fast == null)
        {
            return head.next;
        }
        
        while (fast.next != null) 
        {
            fast = fast.next;
            slow = slow.next;
        }
        
        slow.next = slow.next.next;
        
        return head;
    }
}