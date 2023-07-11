def sum(k,n):
    d = n//k
    return k*((d*(d+1))//2)

def euler(n):
    return (sum(3,n) + sum(5,n) - sum(15,n))

def main():
    t = int(input().strip())
    for i in range(t):
        n = int(input().strip())
        print(f"{euler(n-1)}")

if __name__ == "__main__":
    main()
