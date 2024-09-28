# Count the number of times the character occured in a string 

string = input("Enter the string ")

checker = input("enter the single character you want to check")

count = 0

for i in string :
    if checker == i :
        count = count + 1

print(f"The number of time the {checker} occures in a string is {count}")