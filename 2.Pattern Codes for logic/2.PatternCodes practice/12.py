'''
1
3 2
6 5 4
10 9 8 7

'''


rows = 4
num = 1

for i in range(0, rows):
    start_num = num + i  # Determine the starting number for the current row
    for j in range(i + 1):
        print(start_num, end=" ")
        start_num -= 1
    num += i + 1  # Update num to the next starting number for the next row
    print()
