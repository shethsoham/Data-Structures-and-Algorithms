
rows = int(input('ROWS ?'))
n = rows-1
same= rows
same1 = rows
k = rows*2
m = rows*2
for i in range(0,rows):

    for j in range(0,i):
        print(" ",end="")
    for j in range(i,rows):
        if (i%2 == 0 and j % 2==0 ) or (i%2==1 and j % 2 ==1):
            print("*",end="")
        else:
            print(" ",end="")
    for j in range(rows,k-1):
        if (i%2 == 0 and j % 2==0 ) or (i%2==1 and j % 2 ==1):
            print("*",end="")
        else:
            print(" ",end="")
    k=k-1
    print()

rows = 6
for x in range(rows,m):
    
    for j in range(0,n):
        print(" ",end="")
    for j in range(n,rows):
        if (i%2 == 1 and j % 2==0 ) or (i%2== 0 and j % 2 ==1):
            print("*",end="")
        else:
            print(" ",end="")
    n = n-1
    for j in range(0,x-rows):
        if (x%2 == 1 and j % 2==0 ) or (i%2== 0 and j % 2 ==1):
            print("*",end='')
        else: 
            print(" ",end="")
    print()