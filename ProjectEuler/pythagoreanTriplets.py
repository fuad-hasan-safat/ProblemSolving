import math

def max_pythagorean_triplet_product(n):
    if n < 3:
        return -1
    
    max_product = -1
    for a in range(1, n//3):
        b = (n*n - 2*n*a) // (2*n - 2*a)
        c = n - a - b
        if a*a + b*b == c*c:
            product = a * b * c
            if product > max_product:
                max_product = product
    
    return max_product

# Read input and process each test case
t = int(input().strip())
for i in range(t):
    n = int(input().strip())
    print(max_pythagorean_triplet_product(n))