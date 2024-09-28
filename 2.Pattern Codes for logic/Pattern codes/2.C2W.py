'''
 1  4  9
16 25 36
49 64 81
'''

rows = 3
num = 1
for i in range (0,3):
    for j in range(0,3):
        sq = num * num 
        print( sq,end = " ")
        num = num + 1
    print()