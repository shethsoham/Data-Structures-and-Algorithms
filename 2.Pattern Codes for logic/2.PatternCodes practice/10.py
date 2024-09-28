'''
1 
2 1 
3 2 1 
4 3 2 1 
5 4 3 2 1

'''

rows = 5 

for i in range(1,rows+1):
    num = i
    for j in range(1, rows+1):
        if j <= i & num != 0 :
            print(num,end="")
            num = num - 1
    print()