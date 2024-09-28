'''
10) space in between 
    *
   * *
  * * *
 * * * * 
* * * * *
'''

rows = int(input("Enter the number of rows"))
k = rows
for i in range(0,rows):

    for j in range(0,k-1):
        print(" ",end="")
    for j in range(k*2, k*2-i):
        print("6",end="")
    for j in range (k-1,rows):
        if j % 2 == 0 and i % 2 == 0:
            print("*",end="")
        elif j % 2 == 1 and i % 2 == 1:
            print("*",end="")
        else : 
            print(" ",end="")
    for j in range(rows, rows+i ):
        if j % 2 == 0 and i % 2 == 0:
            print("*",end="")
        elif j % 2 == 1 and i % 2 == 1:
            print("*",end="")
       
        else : 
            print(" ",end="")
    
    print()

    