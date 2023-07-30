from collections import Counter


def migratoryBirds(arr):
    # Write your code here
    cnt = Counter(arr)
    maxVal = max(cnt.values())
    minBid = []
    for key, val in cnt.items():
        if maxVal == val:
            minBid.append(key)
    return min(minBid)
    