# level
#civic 
#madam
#radar

user_input = input("Enter the string ")
reverse_array = []
print("user input is",user_input)

user_array = list(user_input)
print("User array is ",user_array)

for i in range ((len(user_array)-1), -1 , -1 ):
    reverse_array.append(user_array[i])

print("Reversed array is",reverse_array)
    
reversed_input = ""

for i in reverse_array:
    reversed_input = reversed_input + i 

print("reversed input is ",reversed_input)

if reversed_input == user_input:
    print("It is a palindrome ")

else:
    print("It is not a palindrome ")