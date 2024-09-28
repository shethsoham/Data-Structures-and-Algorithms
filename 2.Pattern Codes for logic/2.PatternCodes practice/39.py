'''

10 
10 8 
10 8 6 
10 8 6 4 
10 8 6 4 2

'''

rows = 5

for i in range(0,rows):
    num = 10 
    for j in range(0,i+1):
        print(num,end=" ")
        num = num - 2
    print()