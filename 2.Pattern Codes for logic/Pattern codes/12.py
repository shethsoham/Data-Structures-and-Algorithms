'''
12)
 
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
rows = int(input('ROWS ?'))
n = rows-1
same= rows
same1 = rows
k = rows*2
m = rows*2
for i in range(0,rows):
    for j in range(0,i):
        print(" ",end="")
    for j in range(i,rows):
        print("*",end="")
    for j in range(rows,k-1):
        print("*",end="")
    k=k-1
    print()
for i in range(rows,m):
    for j in range(0,n):
        print(" ",end="")
    for j in range(n,rows):
        print("*",end="")
    n = n-1
    for j in range(1,i+1):
        print("*",end="")
    print()

# rows = int(input("Enter the rows you want"))
# k = rows-1

# for i in range(0,rows):
    
#     for j in range(0,k): 
#         print(" ",end="")
#     for j in range (k, rows):
#         print("*",end="")
#     k=k-1
#     print()