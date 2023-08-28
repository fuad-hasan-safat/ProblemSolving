
'''
This was a tough one and I had to look up and copy some ideas. Here's some explanation.

Trick #1 A triangle number is a sum of numbers e.g. 1+2+3+4+5+6 = 21 ..
notice that 1+2+3+4+5+6 = (1+6)+(2+5)+(3+4) = 3 x 7. Or in general, n'th triangle number is n(n+1)/2.

Trick #2 Any two consecutive numbers are co-prime, that is they share no divisors other than 1. 
Because of that if our triangular number is n(n+1)/2 then it has f(n/2)f(n+1) or f(n)f((n+1)/2) factors. 
Consider the 7th number = 7x(7+1)/2 = 7x4=28. 7 has 2 factors (1 and 7) and 4 has 3 factors (1, 2 and 4).
This means 28 has 2x3 = 6 factors. 

Trick #3 When scanning for divisors within a number N, scan only up to sqrt(N) to reduce the search space even further.
   
Trick #4 (not implemented) Any number can be represented as a product of exponents of prime numbers. 
For example, 7 = 7^7, 4 = 2^2, 28=2^2x7^1. 
A total number of factors is then (a1+1)x(a2+1)x(a3+1)x... where a1, a2, .. are exponents of each of the prime factors. 
So for 28 this will be (2+1)x(1+1) = 6 factors. 
This would probably make the search even faster but we would need to compute prime numbers first.

'''


def f(n: int) -> int:
    factors = {}
    for i in range(1, int(n**0.5)+1):
        if n % i == 0:
            factors[i] = 1
            factors[n // i] = 1
    return len(factors)

def triangle_factors(n: int) -> int:
    return f(n>>1) * f(n+1) if (n & 1) == 0  else f(n) * f((n+1)>>1)
    
def first_triangle_number(n: int) -> int:
    i = 1
    while (triangle_factors(i) <= n): 
        i = i + 1
    return (i*(i+1))>>1

for _ in range(int(input().strip())):
    n=int(input())
    print(first_triangle_number(n))