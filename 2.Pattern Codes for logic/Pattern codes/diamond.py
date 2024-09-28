rows = 5 # number of rows
n = 10   # rows*2
m = 9    # rows*2-1
p = 8    # rows * 2-2

for i in range(0,rows):
    for j in range(0,rows-i-1):
        print(" ",end="")
    for j in range(rows-1-i,rows):
        print("*",end="")
    for j in range(rows,rows+i):
        print("*",end="")
    for j in range(rows+i, m):
        print(" ",end="")
    
    
    print()
for i in range(rows,m):
    i = i - rows
    for j in range (0,i+1):
        print(" ",end="")
    for j in range(i+1,rows):
        print("*",end="")
    for j in range(rows, m-i-1):
        print("*",end="")
    for j in range(m-i-1,m):
        print(" ",end="")
    print()