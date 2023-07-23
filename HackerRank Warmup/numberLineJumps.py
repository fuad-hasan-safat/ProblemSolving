# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. INTEGER x1
#  2. INTEGER v1
#  3. INTEGER x2
#  4. INTEGER v2
#

def kangaroo(x1, v1, x2, v2):
    # Write your code here
    if v2>= v1:
        return "NO"
    if v1 == v2:
        return "YES" if x1 == x2  else "NO"
    jumps = (x2-x1)/(v1 - v2)
    
    return "YES" if jumps>0 and jumps.is_integer() else "NO"

if __name__ == '__main__':
    x1 = int(input())
    v1 = int(input())
    x2 = int(input())
    v2 = int(input())
    print(kangaroo(x1,v1,x2,v2))