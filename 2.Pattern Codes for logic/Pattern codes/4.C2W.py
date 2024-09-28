'''
0 2 3
4 0 6
7 8 0
'''

num = 1 
rows = 3
for i in range(0,3):
    for j in range(0,3):
        if i == j : 
            print("0",end="")
            num = num + 1
        else:
            print(num,end="")
            num = num + 1

    print()