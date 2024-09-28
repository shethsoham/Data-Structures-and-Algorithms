'''
2) 

*
**
***
****
*****

'''

rows = int(input("Enter the no. of rows yyou want"))

for i in range(0,rows):
    for j in range(0,i+1):
        print("*",end="")

    print()