'''
*****
 ****
  ***
   **
    *

'''

rows = 5

for i in range(0,rows):
    for j in range(0,i):
        print(" ",end="")
    for j in range(i,rows):
        print("*",end="")
    print()