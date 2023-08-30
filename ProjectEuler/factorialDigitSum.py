from math import factorial

def getSum(res):
    sum_1 = 0
    while (res != 0):
        sum_1 = sum_1 + (res % 10)
        res = res // 10
    return sum_1

T = int(input())
for i in range(T):
    n = int(input())
    res = factorial(n)
    print(getSum(res))