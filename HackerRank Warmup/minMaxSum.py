def miniMaxSum(arr):
    # Write your code here
    total = sum(arr)
    minValue = min(arr)
    maxValue = max(arr)
    
    minSum = total - maxValue
    maxSum = total - minValue
    
    print(f'{minSum} {maxSum}')

if __name__ == '__main__':

    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)