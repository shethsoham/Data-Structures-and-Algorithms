#Print armstrong number 

#Armstrong number means 

number = int(input("Enter the name you want to checkif it is armstrong or not ?"))

number = str(number)
length = len(number)
array = list(number)
sum = 0 

for i in array:
    i = int(i)
    multiple = i**length
    sum = sum + multiple

print(sum)

number = int(number)
if sum == number :
    print("Armstrong Number ")
else: 
    print("Not a armstrong number ")



# An Armstrong number, also known as a narcissistic number, 
# is a number that is equal to the sum of its own digits raised to the power of the number of digits.
# The number 153 is obtained.

# The number of digits is 3, as there are three digits in 153.

# Calculate the sum of the powered digits:

# The first digit is 1, so 1^3 = 1.
# The second digit is 5, so 5^3 = 125.
# The third digit is 3, so 3^3 = 27.
# Summing them up: 1 + 125 + 27 = 153.
# Compare the sum (153) with the original number (153). Since they are equal, 153 is an Armstrong number.