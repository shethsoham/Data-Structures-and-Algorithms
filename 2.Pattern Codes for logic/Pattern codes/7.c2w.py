'''
A65 B66 C67
D68 E69 F70
G71 H72 I73
'''

rows = 3
num = 65

for i in range (rows):
    for j in range(rows):
        print(str(num) + chr(num),end=" ")
        num = int (num)
        num = num + 1

    print()