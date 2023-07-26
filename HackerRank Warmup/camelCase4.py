from functools import reduce

def combine(string, operation):
    result = reduce( lambda a,b : a+b.capitalize(), string.split())
    if(operation == 'V'):
        return result
    if(operation == 'C'):
        return result if len(result) == 0 else result[0].upper()+result[1:]
    if(operation == 'M'):
        return result+'()'
    
def split(str, operation):
    result = '';
    tmp = ''
    for s in str:
        if(s.isupper()):
            result+=' '+ tmp
            tmp = s.lower()
        else:
            tmp += s.lower()
    result+=' '+tmp
    result = result.strip()
    if(operation == "M" and len(result) > 2 and result[-2:] == '()'):
        result = result[0:-2]
    return result

if __name__ == "__main__":    
    while True: 
        try: 
            val = input() 
        except EOFError: 
            break 
        if(val[0] == 'S'):
            print(split(val[4:],val[2]))
        else:
            print(combine(val[4:],val[2]))