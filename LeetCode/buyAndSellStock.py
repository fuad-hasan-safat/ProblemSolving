from ast import List


def maxProfit(prices):
    profit = 0
    leftPtr = 0

    for rightPtr in range(1,len(prices)):
        if prices[leftPtr] < prices[rightPtr]:
            profit = max(profit,prices[rightPtr] - prices[leftPtr])
        else:
            leftPtr = rightPtr
    return profit
                   
def main():
    lst = [7,2,5,1,6,4,12]
    print(maxProfit(lst))
    
    
if __name__ == "__main__":
    main()