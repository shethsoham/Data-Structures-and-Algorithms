'''
A b C 
d E f 
G h I
'''

rows = 3
num = 65 
s_num = 97 
print(chr(s_num))
for i in range(rows):
    for j in range(rows):
        if i % 2 == 0 and j % 2 ==0 :
            print(chr(num), end= " ")
            num = num + 1 
            s_num =  s_num + 1
        else :
            print(chr(s_num), end = " " )
            s_num =  s_num + 1
            num = num + 1 
        
    print()

