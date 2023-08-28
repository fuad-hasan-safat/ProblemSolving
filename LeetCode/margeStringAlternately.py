class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        ln1, ln2 = len(word1), len(word2)
        return ''.join(a+b for a,b in zip(word1, word2)) + word1[ln2:] +word2[ln1:]