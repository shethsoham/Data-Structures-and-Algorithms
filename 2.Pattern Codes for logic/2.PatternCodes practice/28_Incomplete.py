'''
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
'''

rows = 5 

for i in range(0,rows):
    for j in range(0,rows-i-1):
        print(" ",end="")
    number = i
    for j in range(0,1):
        print("*",end="")
    for j in range (0,i):
        print(" ",end="")
    for j in range (i-1,i):
        print("*",end="")
    print()
    



     
