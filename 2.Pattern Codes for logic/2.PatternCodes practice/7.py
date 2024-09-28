'''
0 1 2 3 4 5 
0 1 2 3 4 
0 1 2 3 
0 1 2 
0 1


'''

rows = 5 

for i in range(0,rows):
    num= 0
    for j in range(0,rows+1):
        if i <=j :
            print(num,end=" ")
            num = num + 1
        
    print()