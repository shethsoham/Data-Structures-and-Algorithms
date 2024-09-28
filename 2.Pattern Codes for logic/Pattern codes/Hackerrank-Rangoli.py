rows = int(input("Enter the number of rows"))
n = rows* 2
m = n-1 

for i in range(0,rows):
    for j in range(0,m-1-2*i):
        print("#",end="")
    for j in range (m-1-2*i,m-2*i):
        print("*",end="")
    for j in range(m -1 -2*i,m-2*i):###########
        print("#",end="")
    # for j in range(m-2*i+1, m -2*i+2):##########
    #     print("b",end="")
    # for j in range(m -2*i+2, m - 2*i+3 ):######
    #     print("3",end="")
    # for j in range(m-1,m):
    #     print("a",end="")
    print()