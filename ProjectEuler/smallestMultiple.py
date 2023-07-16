def gcd(a,b):
    if b == 0:
        return a
    return gcd(b, a%b)

def lcm(a,b):
    return (a*b)// gcd(a,b)

def smallestMultiple(num):
    result = 1
    for n in range(1,num+1):
        result = lcm(result,n)
    return result
    


if __name__ == "__main__":
    t = int(input().strip())
    for a0 in range(t):
        n = int(input().strip())
        print(smallestMultiple(n))
        