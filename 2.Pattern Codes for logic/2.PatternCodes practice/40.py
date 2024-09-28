'''

1 
1 2 1 
1 2 3 2 1 
1 2 3 4 3 2 1 
1 2 3 4 5 4 3 2 1

'''

rows = 5
for i in range(0,rows):
    num =1 
    for j in range(0,i+1):
        print(num,end=" ")
        num = num +1
    for j in range(0,i):
        num = i
        print(num,end=" ")
        i = i -1
    print() 