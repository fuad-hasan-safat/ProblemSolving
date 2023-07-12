# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


def mergeShortedList(l1,l2):
    newLst = []
    if len(l1) == 0:
        return l2
    elif len(l2) == 0:
        return l1
    
    ln1 = len(l1)
    ln2 = len(l2)
    
    i = 0
    j = 0
    
    while len(newLst) < ln1+ln2 :
        if  i != ln1 and j != ln2:
            if l1[i] < l2[j]:
                newLst.append(l1[i])
                i += 1
            elif l1[i] > l2[j]:
                newLst.append(l2[j])
                j += 1
            else:
                newLst.append(l2[j])
                newLst.append(l1[i])
                i += 1
                j += 1
            
            
        else:
            if  i < ln1:
                newLst.append(l1[i])
                i += 1
            elif j < ln2:
                newLst.append(l2[j])
                j += 1
            
        
    return newLst
            
    
        

def main():
    l1 = []
    l2 = [0]
    print(mergeShortedList(l1,l2))
    
    
if __name__ == "__main__":
    main()