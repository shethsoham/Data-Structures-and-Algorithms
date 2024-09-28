'''
D4 C3 B2 A1 
D4 C3 B2 A1
D4 C3 B2 A1
D4 C3 B2 A1
'''

rows = 4
for i in range(rows):
    num = 65
    n_num = 1


    for j in range(rows):
        print(chr(num+rows-1) + str(n_num + rows-1), end = " ")
        num = num - 1
        n_num = n_num  - 1 
    print()
