'''
First we check if str1 + str2 == str2 + str1
If it is equal than if find the longest common substring.
Otherwise we return "".

Suppose str1 = "ABCABC" and str2 = "ABC"
str1 + str2 = ABCABCABC
str2 + str1 = ABCABCABC
str1 + str2 == str2 + str1
return str.substr(0, gcd(size(str1), gcd(size(str2))))
where gcd(3, 6) = 3
So, answer is "ABC"

Also str1 = "LEET", str2 = "CODE"
str1 + str2 = "LEETCODE"
str2 + str1 = "CODELEET"
So, return ""
'''


class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        if str1 + str2 != str2 + str1:
            return ""
        from math import gcd
        return str1[:gcd(len(str1), len(str2))]