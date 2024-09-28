'''

        1 
      1 2 
    1 2 3 
  1 2 3 4 
1 2 3 4 5 

'''

rows = 5
num = 1

for i in range (0,rows):
    for j in range (0, rows-i-1):
        print("_",end="")
    num = 1
    for j in range(rows-i-1, rows):
        print(num,end="")
        num = num + 1

    print()