# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        min_ = min(p.val,q.val)
        max_ = max(p.val,q.val)

        while root:
            if root.val > max_:
                root = root.left
            elif root.val < min_:
                root = root.right
            else:
                return root
        return None
    
if __name__ == "__main__":
    root = TreeNode(6)
    nd1 = TreeNode(2)
    nd2 = TreeNode(8)
    nd3 = TreeNode(0)
    nd4 = TreeNode(4)
    nd5 = TreeNode(7)
    nd6 = TreeNode(9)
    nd7 = TreeNode(3)
    nd8 = TreeNode(5)
    
    root.left = nd1
    root.right = nd2
    nd1.left = nd3
    nd1.right = nd4
    nd2.left = nd5
    nd2.right = nd6
    nd4.left = nd7
    nd4.right = nd8
    
    p = nd1
    q = nd2
    obj = Solution()
    root = obj.lowestCommonAncestor(root,p,q)
    
    print(root.val)
    
    
    
    