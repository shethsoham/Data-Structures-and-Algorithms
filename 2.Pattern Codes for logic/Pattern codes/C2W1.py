'''
 1  16 49
 4  25 64
 9  36 81
'''
rows =int(input("Enter the number of rows you want "))



for i in range(0,rows):
    num = 1 + i
    for j in range(0,rows):
         
        sq = num * num 
        print(sq, end = " ")
        num = num + rows
    print()
