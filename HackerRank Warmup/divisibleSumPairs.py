def divisibleSumPairs(n, k, arr):
    count = 0
    for i in range(0, n):
        for j in range(i+1, n):
            if (arr[i] + arr[j]) % k == 0:
                count += 1
    return count

    
    