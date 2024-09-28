'''
8)
    *
   ***
  *****
 *******
*********
'''
rows = int(input("enter the number of rows you want")) #5
k = rows
for i in range(0,rows):
    for j in range (0,k-1):
        print(" ",end="")
    k = k - 1
    for j in range (k-1,rows-1):
        print("*",end="")
    for j in range(rows,rows+i):
        print("*",end="")
    print()
