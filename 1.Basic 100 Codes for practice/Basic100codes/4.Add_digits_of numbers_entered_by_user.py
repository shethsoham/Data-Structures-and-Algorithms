#4.Add_digits_of numbers_entered_by_user

# num1 = int(input("Enter the number of your choice")) 

# def add_digits(number):
#     # Convert the number to a string for easier manipulation
#     number_str = str(number)
    
#     # Initialize a variable to store the sum of digits
#     sum_of_digits = 0
    
#     # Iterate over each character (digit) in the string
#     for digit in number_str:
#         # Convert the digit back to an integer and add it to the sum
#         sum_of_digits += int(digit)
    
#     return sum_of_digits

# # Get input from the user
# user_input = input("Enter a number: ")

# # Convert the input to an integer
# number = int(user_input)

# # Call the add_digits function and display the result
# result = add_digits(number)
# print("Sum of digits:", result)

user_input = int(input("Hey user, enter the choice of number i will give summ of the numbers"))

digit_array = [int(i) for i in str(user_input)]
print(digit_array)
sum = 0 
for i in digit_array:
    sum = sum+i

print(sum)



