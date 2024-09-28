'''

6)

     *
    **
   ***
  ****
 *****
******
'''
rows = int(input("Enter the rows you want"))
k = rows-1

for i in range(0,rows):
    
    for j in range(0,k): 
        print(" ",end="")
    for j in range (k, rows):
        print("*",end="")
    k=k-1
    print()