
def diagonalDifference(arr):
    # Write your code here
    leftD = rightD = 0
    for i in range(len(arr)):
        leftD += arr[i][i]
        rightD += arr[i][-i-1]
    return abs(leftD-rightD)

def main():
    arr = [[1,2,3],
           [9,11,6],
           [4,8,7]]
    print(diagonalDifference(arr))

if __name__ == "__main__":
    main()