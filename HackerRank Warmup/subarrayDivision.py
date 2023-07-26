# The function accepts following parameters:
#  1. INTEGER_ARRAY s
#  2. INTEGER d
#  3. INTEGER m
#

def birthday(s, d, m):
    # Write your code here
    result = 0
    for i in range(len(s)):
        currSegment = s[i:i+m]
        if sum(currSegment) == d:
            result += 1
    
    return result