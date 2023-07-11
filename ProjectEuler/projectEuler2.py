def main():
    t = int(input().strip())
    for a0 in range(t):
        n = int(input().strip())
        prev = 0
        curr = 1
        total = 0
        while curr < n:
            next_ = prev + curr
            prev = curr
            curr = next_            
            if curr%2 == 0:
                total += curr
        print(total)
    
if __name__ == "__main__":
    main()