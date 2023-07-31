def bonAppetit(bill, k, b):
    # Write your code here
    a = sum([bill[x] for x in range(len(bill)) if x != k])//2
    if a == b:
        print('Bon Appetit')
    else:
        print(b-a)