#Factorial of the number 

#4! = 4*3*2*1

num1 = int(input("Enter the number for the factorial "))

fact = 1
for i in range (num1, 0,-1):
    fact = fact*i
    print ("Value of i is ",i)

print("Factorial of the number is ",fact )