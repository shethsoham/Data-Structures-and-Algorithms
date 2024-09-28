#Reverse digit 

# number = int(input("Enter the number you wish to enter"))

# number =str(number)
# reversed_number = number.reverse()

# print(reversed_number)

user_input = int(input("Enter the input from user "))
num = user_input
num = str(num)
length = len(num)


reverse_input = []
for i in range (0, length ):
    store = user_input % 10 
    user_input = user_input//10
    reverse_input.append(store)
print(reverse_input)

# final_output = 0
# for i in reverse_input:
#     final_output = final_output + i 

# print(final_output)

final_output = ""
for i in reverse_input:
    final_output = final_output + str(i)

print(final_output)


# final_ouput = None 
# final_ouput = int(final_ouput)
# for i in reverse_input:
#     final_ouput = final_ouput + i 

# print(final_output)

