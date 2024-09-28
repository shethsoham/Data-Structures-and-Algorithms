'''

1 2 3 4 5 
2 3 4 5 
3 4 5 
4 5 
5

'''
rows=5
for i in range(0,rows):
    num = i + 1
    for j in range(0,rows-i):
        print(num,end=" ")
        num = num +1
    print()
        
