
def twoSum(nums, target):
    hashTable = dict()
    pairs = []
    i = 0

    while i < len(nums):
        hashTable[nums[i]] = i
        i +=1

    i = 0
    while i < len(nums):
        complement = target - nums[i]

        if complement in hashTable:
            if i != hashTable[complement]:
                pairs.append(i)
                pairs.append(hashTable[complement])
                break
        i +=1
        
    return pairs
        


def main():
    nums = [2,7,11,15]
    target = 9
    pair = twoSum(nums,target)

    print(pair)

    

if __name__ == "__main__":
    main()
