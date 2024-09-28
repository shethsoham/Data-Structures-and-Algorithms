'''
0 2 0
4 0 6
0 8 0

'''

rows = 3
num = 1
for i in range(0,rows):
    for j in range(0,rows):
        # if i == j:
        #     print("0",end=" ")
        #     num = num + 1
        # elif j == rows - i + 1:
        #     print("0",end==" ")
        #     num = num + 1
        if i == rows + j - 3:
            print("0",end=" ")
            num = num + 1
        elif i + j == rows - 1:
            print(0, end=" ")
            num = num + 1
        else :
            print( num ,end= " ")
            num = num + 1
    print()
