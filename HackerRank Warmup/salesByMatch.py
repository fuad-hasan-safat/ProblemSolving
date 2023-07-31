from collections import Counter

def sockMerchant(n, ar):
    # Write your code here
    pairCnt = 0
    for key, val in Counter(ar).items():
        pairCnt += val//2
    return pairCnt