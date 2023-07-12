# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = curr = ListNode()
        while list1 and list2:
            if list1.val < list2.val:
                curr.next = list1
                list1 = list1.next
            else:
                curr.next = list2
                list2 = list2.next
            curr = curr.next
                    
        curr.next = list1 or list2
                    
        return dummy.next
    
    
def main():
    l1 = ListNode(1)
    nw1 = ListNode(3)
    nw2 = ListNode(7)
    l1.next = nw1
    nw1.next = nw2
    
    l2 = ListNode(2) 
    nw3 = ListNode(3)
    nw4 = ListNode(4)
    l2.next = nw3
    nw3.next = nw4
    
    obj = Solution()
    current = obj.mergeTwoLists(list1=l1,list2=l2)
    while (current):
        print(current.val,end=' ')
        current = current.next
    
    
if __name__ == "__main__":
    main()