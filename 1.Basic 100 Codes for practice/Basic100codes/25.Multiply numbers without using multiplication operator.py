# multiply the numbers without using multiplication operator *

# nice question to solve 

first_number = float(input("Enter the first number"))
second_number = int(input("Enter the second number "))

sum = 0 
for i in range(1,second_number+1):
    sum = sum + first_number
    print(sum)
print(sum)