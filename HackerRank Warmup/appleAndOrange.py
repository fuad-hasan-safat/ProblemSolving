# The function accepts following parameters:
#  1. INTEGER s
#  2. INTEGER t
#  3. INTEGER a
#  4. INTEGER b
#  5. INTEGER_ARRAY apples
#  6. INTEGER_ARRAY oranges

def countApplesAndOranges(s, t, a, b, apples, oranges):
    # Write your code here 
    
    def countFruits(treePtr, fruits):
        counter = 0
        for fruitPtr in fruits:
            if s <= fruitPtr+treePtr <= t:
                counter += 1
        return counter
        
    print(countFruits(a,apples))
    print(countFruits(b,oranges))
    
if __name__ == '__main__':
    apples = [2, 3, -4]
    oranges = [3,-2,-4]
    s , t = 7 , 10
    a , b = 4, 12
    countApplesAndOranges(s,t,a,b,apples,oranges)