'''


1
2 4
3 6 9
4 8 12 16

'''


rows = 8
num = 1

for i in range(1, rows+1):
    num = i
    k = 1
    for j in range(1,i+1):
        num = i * k  
        print(num,end= "  ")
        k = k + 1
    print()
