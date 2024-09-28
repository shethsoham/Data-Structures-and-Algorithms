'''

5)


*
**
***
****
*****
******
*****
****
***
**
*

'''

rows = int(input("Enter the number of rows you want "))#11

for i in range(0,rows//2):
    for j in range(0,i+1):
        print("*",end="")

    print()
for i in range(0,((rows+2)//2)):
    print("*",end="")
print()
k = rows//2
for i in range(0,rows//2):
    for j in range(0, k):
        print("*",end="")
    k = k-1
    print()



