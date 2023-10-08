#
# Complete the 'reverseArray' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts INTEGER_ARRAY a as parameter.
#

def reverseArray(a):
    # Write your code here
    revArr = []
    
    i = len(a) - 1
    while i >= 0:
        revArr.append(a[i])
        i = i - 1
        
    return revArr