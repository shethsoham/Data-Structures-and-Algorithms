'''
        *
      * * 
    * * * 
  * * * * 
* * * * *

'''

rows = 5


for i in range(1, rows+1):
    for j in range(0,rows-i):
        print(" ",end="")
    for j in range(rows-i,rows):
        print("*",end="")

    print()

