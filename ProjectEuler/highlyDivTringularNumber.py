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