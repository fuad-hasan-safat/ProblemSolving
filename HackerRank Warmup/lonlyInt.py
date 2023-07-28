def lonelyinteger(a):
    # Write your code here
    count = dict()
    
    for el in a:
        if el in count:
            count[el] += 1
        else:
            count[el] = 1
    
    
    for el in a:
        if count[el] == 1:
            return el