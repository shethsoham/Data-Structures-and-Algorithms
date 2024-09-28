'''

             *   
           *  *   
          *  *  *   
         *  *  *  *   
        *  *  *  *  *   
       *  *  *  *  *  *   
      *  *  *  *  *  *  * 


'''
rows = 7 
middle = 3

for i in range(0,rows):
    for j in range(0,rows-i-1):
        print(" ",end="")
    for j in range(rows-i-1, rows):
        if (i %2 ==0 and j % 2 ==0) or (i%2==1 and j%2 ==1 ):
            print("*",end="")
        else:
            print(" ",end="")
    for j in range(rows,rows+i):
        if (i %2 ==1 and j % 2 ==1) or (i%2==0 and j%2 ==0 ):
            print("*",end="")
        else:
            print(" ",end="")
    for j in range(rows+i+1,rows*2):
        print(" ",end="")
    print()