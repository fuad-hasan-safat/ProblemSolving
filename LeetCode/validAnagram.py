class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)
               

def main():
    s = "cat"
    t = "rat"
    
    obj = Solution()
    print(obj.isAnagram(s,t))
    
       
if __name__ == "__main__":
    main()