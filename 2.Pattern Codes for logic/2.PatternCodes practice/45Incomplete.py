'''
1 * 2 * 3 * 4 

1 * 2 * 3 

1 * 2 

1
'''

rows = 4

for i in range(0,rows):
    num = 1
    print(num,end=)
    for j in range(0,rows-i):
        print(num,end="*")
        num = num + 1
        
    print()