'''

1
22
333
4444
55555

'''

rows = 5
num = 1
for i in range(0,rows):
    for j in range(0,rows):
        if i >=j :
            print(num,end="")
    
    num = num + 1
    print()