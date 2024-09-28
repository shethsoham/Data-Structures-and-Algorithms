'''
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5

'''

rows = 5

for i in range(0,rows):
    num = 1
    for j in range(0,rows):
        if i>=j :
            print(num,end=" ")
            num = num + 1
    
    print()