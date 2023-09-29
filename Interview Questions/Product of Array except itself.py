"""
Given an array arr[] of n integers, construct a Product Array prod[] (of the same size) 
such that prod[i] is equal to the product of all the elements of arr[] except arr[i]. 
"""
def multiplication(arr, pos):
    product = 1
    for el in arr:
        if el != arr[pos]:
            product = product*el
    return product

if __name__ == "__main__":
    arr = [10, 3, 5, 6, 2]
    prod = []
    for i in range(len(arr)):
        prod.append(multiplication(arr,i))
    print(prod)