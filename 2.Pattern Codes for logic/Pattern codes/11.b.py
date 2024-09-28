'''
*****
 ***
  *
'''

rows = 3
k = rows * 2
for i in range(0,rows):
    for j in range(rows-i, rows):
        print(" ",end="")
    for j in range(i,rows):
        print("*",end="")
    for j in range(rows,k-1):
        print("*",end="")
    for j in range(k+i,k-i,-1):
        print(" ",end="")
    k =k-1
    print()
                   
                   
                   
