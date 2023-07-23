def breakingRecords(scores):
    # Write your code here
    minval = scores[0]
    maxval = scores[0]
    minCnt = 0
    maxCnt = 0
    for scr in scores[1:]:
        if scr < minval:
            minval = scr
            minCnt += 1
        elif scr > maxval:
            maxval = scr
            maxCnt += 1
    return [maxCnt, minCnt]

if __name__ == '__main__':
    print(breakingRecords([12,24,10,24]))