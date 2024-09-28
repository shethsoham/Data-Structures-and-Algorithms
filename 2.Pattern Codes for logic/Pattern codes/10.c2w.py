'''
d c b a 
d c b 
d c
d
'''

rows = 4 
for i in range(rows):
    num = 97 + rows -1
    for j in range(rows- i ):
        print(chr(num),end = " ")
        num = num - 1 
    
    print()
