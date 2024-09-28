'''

   1 
   1    2    1 
   1    2    4    2    1 
   1    2    4    8    4    2    1 
   1    2    4    8   16    8    4    2    1 
   1    2    4    8   16   32   16    8    4    2    1 
   1    2    4    8   16   32   64   32   16    8    4    2    1 
   1    2    4    8   16   32   64  128   64   32   16    8    4    2    1 

'''

rows = 8 
power = 0

for i in range(0,rows):
    power = 0
    for j in range(0,i+1):
        print(2**power,end =" ")
        power = power + 1
    
    power = 0
    for j in range (0,i):
        power = i-1 
        print(2**power,end =" ")
        i = i - 1
    print()