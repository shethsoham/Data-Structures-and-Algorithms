# #Sum of square of the given number 

user_number =int(input("enter the number you want to sum of sqaure of the given number "))

user_number = str(user_number)

array = list(user_number)
print(array)
sum = 0 
for i in array:
    i = int(i)
    square = i*i 
    sum = sum + square

print(sum)