'''
1 
2 1
4 2 1
8 4 2 1
16 8 4 2 1
32 16 8 4 2 1
64 32 16 8 4 2 1
128 64 32 16 8 4 2 1

'''
rows = 8
for i in range(0,rows):
   power = i
   for j in range(0,i+1):
        print(2**power,end=" ")
        power = power - 1
   print()