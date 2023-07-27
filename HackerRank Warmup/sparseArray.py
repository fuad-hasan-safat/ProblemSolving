def matchingStrings(strings, queries):
    # Write your code here
    word = dict()
    ans = []
    for string in strings:
        if string in word:
            word[string] += 1
        else:
            word[string] = 1
            
    for query in queries:
        if query in word:
            ans.append(word[query])
        else:
            ans.append(0)
    return ans