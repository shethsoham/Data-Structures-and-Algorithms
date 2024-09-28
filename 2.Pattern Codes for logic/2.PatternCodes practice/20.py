'''

        * * * * * * 
         * * * * * 
          * * * * 
           * * * 
            * * 
             * 

'''

rows = 6
for i in range(1,rows+1):
    for j in range(rows-i, rows+1):
        print(" ",end="")
    for j in  range(i,rows+1):
        if (i % 2 != 0 and j % 2 == 0 ) or (i % 2 == 0 and j % 2 != 0):
            print("*",end="")
        else:
            print(" ",end="")
    for j in range(rows+1, rows*2-i):
        if (i % 2 != 1 and j % 2 == 1 ) or (i % 2 == 1 and j % 2 !=1 ):
            print("*",end="")
        else:
            print(" ",end="")
        

    print()