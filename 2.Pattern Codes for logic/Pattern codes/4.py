'''
4)
1
12
123
1234
12345

'''

rows = int(input("enter the number of rows ?"))

for i in range(0,rows):
    k = 1 
    for j in range(0,i+1):
        print(k, end= "")
        k = k + 1

    print()