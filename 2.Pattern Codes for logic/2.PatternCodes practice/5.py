'''
1 1 1 1 1 
2 2 2 2 
3 3 3 
4 4 
5

'''

rows = 5 

for i in range(1,rows+1):
    for j in range(1, rows+1):
        if i <= j :
            print(i,end=" ")
    print()
