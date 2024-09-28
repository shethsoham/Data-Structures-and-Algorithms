'''

1
2 3
4 5 6
7 8 9 10

'''

num = 1
rows = 4
for i in range(0,rows):
    for j in range(0,i+1):
        print(num, end=" ")
        num = num + 1

    print()