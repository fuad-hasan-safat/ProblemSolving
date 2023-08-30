for _ in range(int(input())):
    t = []
    for _ in range(int(input())):
        t.append([int(n) for n in input().split()])
    
    for i in range(len(t)-2, -1, -1):
        for j in range(0, len(t[i])):
            t[i][j] += max(t[i+1][j], t[i+1][j+1])
    
    print(t[0][0])