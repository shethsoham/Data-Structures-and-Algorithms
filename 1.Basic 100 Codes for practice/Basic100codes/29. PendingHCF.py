# Highest Common Factor


a = int(input("Enter the first number"))
b = int(input("Enter the second number"))

while a % b != 0 :
    rem = a % b
    a = b 
    b = rem

print("Your Hcf Is ", b)