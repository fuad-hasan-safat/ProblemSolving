from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
        
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        while head:
            if head.val == 'found':
                return True
            head.val = 'found'
            head = head.next
        return False

if __name__ == "__main__":
    head = ListNode(3)
    nd1 = ListNode(9)
    nd2 = ListNode(20)
    nd3 = ListNode(15)


    
    head.next = nd1
    nd1.next = nd2
    nd2.next = nd3
    nd3.next = nd1
    obj = Solution()
    print(obj.hasCycle(head))