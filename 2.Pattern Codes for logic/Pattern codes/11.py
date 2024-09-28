'''
11) space in between 
* * * * * 
 * * * * 
  * * * 
   * * 
    * 

'''

rows = 5
k = rows * 2
for i in range(0,rows):

    for j in range(rows-i, rows):
        print(" ",end="")
    for j in range(i,rows):
        if (i % 2 ==0 and j % 2 == 0) or (i%2 == 1 and j % 2 == 1):
            print("*",end="")
        else: 
            print(" ",end="")
    for j in range(rows,k-1):
        if (i % 2 ==0 and j % 2 == 0) or (i%2 == 1 and j % 2 == 1):  
                print("*",end="")
        else: 
                print(" ",end="")
    for j in range(k,k-i,-1):
        print(" ",end="")
    k =k-1
    print()