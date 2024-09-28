'''
1 
3 3 
5 5 5 
7 7 7 7 
9 9 9 9 9

'''

rows = 5

num = 1
for i in range(0,rows):
    for j in range(0,rows):
        if i >= j :
            print (num, end=" ")

    num = num + 2
    print()