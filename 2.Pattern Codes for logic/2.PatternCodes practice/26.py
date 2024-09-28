'''

* * * * * 
 * * * * 
  * * * 
   * * 
    * 
    * 
   * * 
  * * * 
 * * * * 
* * * * * 


'''

'''
rows = 5
double_rows = rows*2 -1


for i in range (0,rows):
    for j in range (0,i):
        print(" ",end="")
    for j in range (i,rows):
        if (i%2 == 0 and j %2 == 0) or (i%2 == 1 and j % 2 == 1):
            print("*",end="")
        else:
            print(" ",end="")  
    for j in range(0,rows-1-i):
        if (i%2 == 0 and j %2 == 1) or (i%2 == 1 and j % 2 == 0):
            print("*",end="")
        else:
            print(" ",end="") 
    print()
for i in range(0,rows):
    for j in range(0,rows-i-1):
        print(" ",end="")
    for j in range(0,i+1):
        if (i%2 == 0 and j %2 == 1) or (i%2 == 1 and j % 2 == 0):
            print("*",end="")
        else:
            print(" ",end="")
    for j in range(0,i):
        if (i%2 == 1 and j %2 == 0) or (i%2 == 0 and j % 2 == 1):
            print("*",end="")
        else:
            print(" ",end="")
    print()

'''

rows = 5

# Upper part of the diamond
for i in range(rows):
    # Print leading spaces
    for j in range(i):
        print(" ", end="")
    # Print stars with spaces
    for j in range(i, rows):
        print("* ", end="")
    print()

# Lower part of the diamond
for i in range(rows):
    # Print leading spaces
    for j in range(rows - i - 1):
        print(" ", end="")
    # Print stars with spaces
    for j in range(i + 1):
        print("* ", end="")
    print()

