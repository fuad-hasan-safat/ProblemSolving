
def square(n):
    if (n == 0):
        return 0

    if (n < 0):
        n = -n

    x = n >> 1

    if (n & 1):
        return ((square(x) << 2) + (x << 2) + 1)

    else:
        return (square(x) << 2)

t = int(input().strip())
for a0 in range(t):
    n = int(input().strip()) 
    sumUpToN = (n*(n+1))// 2 
    squareSum = (n*(n+1)*((n*2)+1))//6
    print(square(sumUpToN) - squareSum)