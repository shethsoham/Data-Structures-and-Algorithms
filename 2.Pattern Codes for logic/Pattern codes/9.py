'''
9)
*********
 *******
  *****
   ***
    *

'''

rows = int(input("Enter the number of rows"))
k = rows
for i in range(0,rows):
    for j in range(1,i+1):
        print(" ",end="")
    for j in range(0,k*2-1):
        print("*",end="")
        
    k = k -1
    print()
  
 