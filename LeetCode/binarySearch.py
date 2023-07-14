from bisect import bisect_left
from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        return bisect_left(nums, target) if target in nums else -1
    
def main():
    lst = [-1,0,3,5,9,12]
    obj = Solution()
    print(obj.search(lst,2))
    
    
if __name__ == "__main__":
    main()