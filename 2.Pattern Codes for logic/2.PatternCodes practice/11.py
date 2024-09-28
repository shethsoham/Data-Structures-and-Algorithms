'''

5 4 3 2 1 
4 3 2 1 
3 2 1 
2 1 
1

'''

rows = 5


for i in range(0,rows):
    num = rows - i
    for j in range(0,rows):
        if i<=j :
            print(num,end=" ")
            num = num -1
    print()