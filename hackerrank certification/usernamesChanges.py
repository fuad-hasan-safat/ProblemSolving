import os

def possibleChanges(usernames):
    answer = []
    for user in usernames:
        if len(user) <= 1:
            answer.append("NO")
        for i in range(len(user) - 1):
            if user[i] > user[i + 1]:
                answer.append("YES")
                break
        else:
            answer.append("NO")
    return answer
        
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    usernames_count = int(input().strip())

    usernames = []

    for _ in range(usernames_count):
        usernames_item = input()
        usernames.append(usernames_item)

    result = possibleChanges(usernames)

    fptr.write('\n'.join(result))
    fptr.write('\n')

    fptr.close()