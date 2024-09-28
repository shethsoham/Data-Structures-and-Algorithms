#Convert integer into array or list

input = 1234
array = []
input = str(input)

for i in range(len(input)):
    input = int (input)
    reminder = input % 10
    array.append(reminder)
    input = input//10
    print("checking input ",input)


print("printing  the array",array)

input_1 = 1234

array_1 = []
while input_1 > 0 :
    reminder_1 = input_1 % 10 
    array_1.append(reminder_1)
    input_1 = input_1 // 10 

print(array_1)
array_1.reverse()
print(array_1)