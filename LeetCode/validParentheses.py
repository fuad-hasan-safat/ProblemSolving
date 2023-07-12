def validParenthesis(s):
    lst = []
    if len(s) == 0:
        return True
    
    i = 0
    while i < len(s):
        if s[i] in ['(', '{', '[']:
            lst.append(s[i])
        elif (
            (s[i] == ')' and len(lst)!=0 and lst[len(lst) - 1] == '(') or
            (s[i] == '}' and len(lst)!=0 and lst[len(lst) - 1] == '{') or
            (s[i] == ']' and len(lst)!=0 and lst[len(lst) - 1] == '[') 
        ):
            lst.pop()
        else:
            return False
        i += 1
    if len(lst) == 0:
        return True
    
    return False
        

def main():
    status =  validParenthesis("([])")
    print(status)
    
    
    
    

if __name__ == "__main__":
    main()