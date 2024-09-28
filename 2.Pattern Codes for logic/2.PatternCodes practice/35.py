'''

   1 
   2    1 
   4    2    1 
   8    4    2    1 
  16    8    4    2    1 
  32   16    8    4    2    1 
  64   32   16    8    4    2    1 
 128   64   32   16    8    4    2    1 
Note: In each column, every number is double it’s the pr


'''

num = 2
rows = 10

for i in range(0,rows):
    power = i 
    for j in range(0,i+1):
        sq = (num**power)
        print(sq,end=" ")
        power = power -1
    print()