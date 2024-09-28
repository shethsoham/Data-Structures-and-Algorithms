'''

5 5 5 5 5 
4 4 4 4 
3 3 3 
2 2 
1

'''


rows = int(input("Enter the number of rows you want"))

num = rows
for i in range(0,rows):
    for j in range (0,rows-i):
        print(num,end=" ")
    num = num -1   
    print()
