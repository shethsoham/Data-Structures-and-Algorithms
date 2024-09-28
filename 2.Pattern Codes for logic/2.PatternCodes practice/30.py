'''

A
B C
D E F
G H U J
K L M N O

'''

ascii_number = 65

rows = 7
for i in range(0,rows):
    for j in range(0,i+1):
        
        character = chr(ascii_number)
        print(character,end=" ")
        ascii_number =ascii_number+1
    
    print()