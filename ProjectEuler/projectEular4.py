def largestPalindrome(n):
    reverse = int(str(n)[::-1])
    if reverse == n:
        for i in range(100,1000):
            for j in range(100,1000):
                if (i*j) == n:
                    return True
        return False
    else:
        return False
            
            
def main():
    t = int(input().strip())
    for a0 in range(t):
        n = int(input().strip())
        flag = False
        while flag == False:
            n = n-1
            flag = largestPalindrome(n)
        print(n)
        
if __name__ == "__main__":
    main()