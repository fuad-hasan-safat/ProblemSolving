# Definition for a binary tree node.
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        def dfs(root):
            if root == None:
                return [True,0]
            
            left,right = dfs(root.left), dfs(root.right)
            balanced = left[0] and right[0] and abs(left[1] - right[1]) <= 1
            return [balanced, 1 + max(left[1], right[1])]
        return dfs(root)[0]
    
if __name__ == "__main__":
    root = TreeNode(3)
    nd1 = TreeNode(9)
    nd2 = TreeNode(20)
    nd3 = TreeNode(15)
    nd4 = TreeNode(7)

    
    root.left = nd1
    root.right = nd2
    nd2.left = nd3
    nd2.right = nd4
    obj = Solution()
    print(obj.isBalanced(root))