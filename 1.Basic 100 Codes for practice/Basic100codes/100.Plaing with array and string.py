# Array 
# String 

# 1. Convert string to array using builtin function list() 
'''
string1 = "soham"
print("String is ",string1)

array1 = list(string1)
print("Array is ", array1)

'''
# 2. Convert string to array with out using built in function
'''
string2 = "Soham" 

array2 = []
for i in string2:
    array2.append(i)

print(array2)
'''
#3 convert array into string use .join() built in function
'''
array = ['s','o','h']
string = "".join(array)
print(string)
print(len(string))
'''

#4 convert array into string without using .join
'''
array = ['S','o','h']
string = ""
for i in array:
    string = string + i 

print("without using join",string)
'''