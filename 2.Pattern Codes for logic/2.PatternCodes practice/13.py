'''

1 
1 1 
1 2 1 
1 3 3 1 
1 4 6 4 1 
1 5 10 10 5 1 
1 6 15 20 15 6 1

'''

rows = 6
num =0

for i in range(0,rows):
    
    for j in range(0,i+1):
        num = num + i
        print(11**num,end="")
    print()

