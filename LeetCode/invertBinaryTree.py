# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root: 
            return root
        self.invertTree(root.left) 
        self.invertTree(root.right)  
       
        root.left, root.right = root.right, root.left
        return root
    
    def printTree(self, root: Optional[TreeNode]):
        if not root:
            return 0
        print(root.val, end='')
        self.printTree(root.left)
        self.printTree(root.right)
            

def main():
    root = TreeNode(4)
    nd1 = TreeNode(2)
    nd2 = TreeNode(7)
    nd3 = TreeNode(1)
    nd4 = TreeNode(3)
    nd5 = TreeNode(6)
    nd6 = TreeNode(9)
    
    root.left = nd1
    root.right = nd2
    nd1.left = nd3
    nd1.right = nd4
    nd2.left = nd5
    nd2.right = nd6
    
    tree = Solution()
    tree.printTree(root)
    print()
    reverseTree = tree.invertTree(root)
    tree.printTree(reverseTree)
    
    
    
if __name__ == "__main__":
    main()