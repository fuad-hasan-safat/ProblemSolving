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

def siceOfEratosthenes():
    limit = 10**4+1
    isPrime = [True for i in range(limit+1)]
    p = 2
    while square(p) <= limit:
        if isPrime[p]:
            for i in range(square(p), limit+1,p):
                isPrime[i] = False
        p += 1
        
    # Generate list of prime numbers
    primeNumbers = []
    for p in range(2, limit):
        if isPrime[p]:
            primeNumbers.append(p)
    
    return primeNumbers
    
    

if __name__ == "__main__":
    listOFprimeNumbers = siceOfEratosthenes()
    t = int(input().strip())
    for a0 in range(t):
        n = int(input().strip())
        print(listOFprimeNumbers[n-1])