'''

5 4 3 2 1 1 2 3 4 5 

5 4 3 2     2 3 4 5 

5 4 3         3 4 5 

5 4             4 5 

5                 5

'''

rows = 5 

for i in range(0,rows):
    num = 5
    for j in range(0,rows-i):
        print(num,end=" ")
        num = num - 1
    for j in range(0,i):
        print(" ",end=" ")
    for j in range(0,i):
        print(" ",end=" ")
    num = i + 1
    for j in range(0,rows-i):
        print(num,end=" ")
        num = num + 1
    print()