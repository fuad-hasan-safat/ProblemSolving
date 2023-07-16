from collections import Counter
def stringAnagram(dictionary, query):
    # Write your code here
    dict = ["".join(sorted(word)) for word in dictionary]
    q = ["".join(sorted(word)) for word in query]
    result = []
    count = Counter(dict)
    for word in q:
        if word in count.keys():
            result.append(count[word])
        else:
            result.append(0)

    return result


if __name__ == '__main__':
    dictionary = ['cat', 'a', 'danno', 'tac', 'a','cta']
    query = ['tca','safat', 'a']
    print(stringAnagram(dictionary,query))
    