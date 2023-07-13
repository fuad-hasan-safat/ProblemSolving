class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower()
        s = ''.join(char for char in s if char.isalnum())
        rightPtr = len(s) - 1
        
        for leftPtr in range(len(s)):
            if leftPtr == rightPtr:
                break
            else:
                if s[leftPtr] != s[rightPtr]:
                    return False
            rightPtr -= 1
            
        return True
    

def main():
    s =  "race a car"
    obj = Solution()
    print(obj.isPalindrome(s))
    
    
if __name__ == "__main__":
    main()