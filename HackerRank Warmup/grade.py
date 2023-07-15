def gradingStudents(grades):
    # Write your code here
    result = []
    for grade in grades:
        if grade >= 38:
            mod5 = grade%5
            
            if mod5 >= 3:
                result.append(grade+(5-mod5))
            else:
                result.append(grade)
        else:
            result.append(grade)
    return result

if __name__ == '__main__':
    grades_count = int(input().strip())
    grades = []
    for _ in range(grades_count):
        grades_item = int(input().strip())
        grades.append(grades_item)

    result = gradingStudents(grades)
    
    for grade in result:
        print(grade)