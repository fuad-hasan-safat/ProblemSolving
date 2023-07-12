def plusMinus(arr):
    # Write your code here
    zr,pt,nt = 0.0,0.0,0.0
    for n in arr:
        if n < 0:
            nt += 1
        elif n > 0:
            pt += 1
        else:
            zr += 1
    length = len(arr)
    nt /= length
    pt /= length
    zr /= length
    
    print("{:.6f}".format(pt))
    print("{:.6f}".format(nt))
    print("{:.6f}".format(zr))
    
def main():
    # n = int(input())
    arr = [1,-8,-9,0,5,9]
    plusMinus(arr)

if __name__ == "__main__":
    main()