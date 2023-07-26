#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER_ARRAY a
#  2. INTEGER_ARRAY b
#

def getTotalX(a, b):
    # Write your code here
    result = []
    for i in range(1,max(max(a),max(b))+1):
        if all(num%i == 0 for num in b) and all(i%k == 0 for k in a):
            result.append(i)
    
    return len(result)