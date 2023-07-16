def timeConversion(s):
    # Write your code here
    zn = s[-2:]
    if zn == "PM" and s[:2] != "12":
        s = str(12 + int(s[:2])) + s[2:]
    if zn == "AM" and s[:2] == "12":
        s = "00" + s[2:]
    return s[:-2]

if __name__ == '__main__':
    s = input() # formate:-> hh:mm:ssAM/PM
    result = timeConversion(s)
    print(result)