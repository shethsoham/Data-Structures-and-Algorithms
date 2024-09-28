'''
A B C
D E F 
G H I

A = 65
a = 97
'''
rows = 3
num = 65 

for i in range(rows):
    for j in range(rows):
        char = chr(num)
        print(char, end="")
        num = num + 1
    print()
#  -------------------------------------------------------------------------------------------
# rows = 3
# num = 65 
# for i in range(rows):
#     for j in range(rows):
#         num = chr(num)
#         print(num, end = "")
#         num = int(num)
#         num = num + 1 
#     print()