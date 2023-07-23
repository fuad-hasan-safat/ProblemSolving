class Solution:
    def longestPalindrome(self, s: str) -> int:
        oddCount = 0
        charCounter = {}
        for ch in s:
            if ch in charCounter:
                charCounter[ch] += 1
            else:
                charCounter[ch] = 1
            
            if charCounter[ch]%2 != 0:
                oddCount += 1
            else:
                oddCount -= 1
        
        if oddCount>0:
            return len(s) - oddCount + 1
        return len(s)
