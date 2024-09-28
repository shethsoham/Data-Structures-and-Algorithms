#Largest amongst 3 number 

num_1 = int(input("Enter the number 1 "))
num_2 = int(input("Enter the number 2 "))
num_3 = int(input("Enter the number 3 "))

if num_1 > (num_3 and num_2):
    print("Num1 1 is greatest amongst all which is", num_1 )

elif num_2 > (num_1 and num_3):
    print("Num1 2 is greatest amongst all which is", num_2 )
else: 
    print("Num1 3 is greatest amongst all which is", num_3 )
    