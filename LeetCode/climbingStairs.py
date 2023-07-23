class Solution:
    def climbStairs(self, n: int) -> int:
        prev = 0
        prev2 = 1
        for i in range(1,n+1):
            curn = prev + prev2
            prev = prev2
            prev2 = curn
        return prev2