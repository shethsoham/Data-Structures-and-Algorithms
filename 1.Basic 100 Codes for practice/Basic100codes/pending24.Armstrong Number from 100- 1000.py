# Armstrong number between 100 - 1000

sum = 0 

for i in range(100,1001,1):
    i = str(i)
    multiple = len(i)
    array = list(i)
    i = int(i)
    num = i**multiple
    sum += num 

if sum == i :
    print("It is armstrong  number",i)
    
    
    

# number = int(input("Enter the name you want to checkif it is armstrong or not ?"))
# number = str(number)
# length = len(number)
# array = list(number)
# sum = 0 

# for i in array:
#     i = int(i)
#     multiple = i**length
#     sum = sum + multiple

# print(sum)

# number = int(number)
# if sum == number :
#     print("Armstrong Number ")
# else: 
#     print("Not a armstrong number ")


    