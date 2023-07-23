from collections import Counter


class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        frqOfRansom = Counter(ransomNote)
        frqOfMagazine = Counter(magazine)

        for key, val in frqOfRansom.items():
            if key not in frqOfMagazine:
                return False
            elif frqOfMagazine[key] < val:
                return False
        return True