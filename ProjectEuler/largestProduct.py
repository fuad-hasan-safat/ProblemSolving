def product(arr):
    prd = 1
    for i in range(len(arr)):
        prd *= int(arr[i])
    return prd

t = int(input().strip())
for a0 in range(t):
    n,k = input().strip().split(' ')
    n,k = [int(n),int(k)]
    num = input().strip()
    largestProduct = 0
    for i in range((n-k)+1):
        conj5dig = num[i:i+k]
        mul = product(conj5dig)
        if mul>largestProduct:
            largestProduct = mul
    print(largestProduct)