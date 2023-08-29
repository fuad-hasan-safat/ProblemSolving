def sumDigits(n):
    sum=0
    for i in str(n):
        sum+=int(i)
    return sum
for i in range(int(input())):
    n=int(input())
    print(sumDigits(2**n))