# 15 

rows = 5
n = rows * 2
m = n - 1
p = n - 2

for i in range(0,m):
    if i == 0 :
        for j in range(0, m ):
            print("*",end="")
        print()
        for j in range(1, rows):
            if i == j :
                print("%",end="")
            else:
                print("1",end="")
        print()
        for j in range(p,rows-1):

            if i == p-j:
                print("#",end="")
            else:
                print("2",end="")
        print()
    else:
        print("3",end="")
    
print()

    

