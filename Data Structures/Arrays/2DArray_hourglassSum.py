#
# Complete the 'hourglassSum' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.
#

def hourglassSum(arr):
    # Write your code here
    maxSum = -300
    
    for i in range(1, len(arr) - 1):
        for j in range(1, len(arr[0]) - 1):
            curSum = arr[i][j] + arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1] + arr[i+1][j-1] + arr[i+1][j]+ arr[i+1][j+1]
            if maxSum < curSum:
                maxSum = curSum
    
    return maxSum
