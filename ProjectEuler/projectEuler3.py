import math
def max_prime_factor(n): 
    maxPrime = -1
    
    while n % 2 == 0: 
        maxPrime = 2
        n >>= 1 
    
    for i in range(3, int(math.sqrt(n)) + 1, 2): 
        while n % i == 0: 
            maxPrime = i 
            n //= i 
    
    return n if n > 2 else maxPrime
  

def main():
    T = int(input().strip())
    for _ in range(T):
        N = int(input().strip())
        print(max_prime_factor(N))
    


if __name__ == "__main__":
    main()
    