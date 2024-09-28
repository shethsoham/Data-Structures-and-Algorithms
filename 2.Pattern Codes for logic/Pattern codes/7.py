'''
7)

******
 *****
  ****
   ***
    **
     *
'''

rows = int(input("Enter the number of rows you want "))
for i in range(0,rows):
    for j in range(1,i+1):
        print("",end="")
    for j in range(i+1,rows+1):
        print("*",end="")

    print()
    
