def flippingBits(n):
    s = 2**32 ^ n
    t = str(bin(s))[2:]
    t = t.replace('0','2')
    t = t.replace('1','0')
    t = t.replace('2','1')
    
    return int(t,2)