rows = 5
n = rows-1
m = rows*2
print(m-1)
print(m//2+1)
for i in range(0,rows):
    
    for j in range(0,rows-1-i):
        print(" ",end="")
     
    for j in range(rows-i-1, rows-i):
        print("*",end="")
       
    for j in range(1,i+1):
        print(" ",end="")
      
    # for j in range(m//2,m-1):
    #     if (m//2 + i == rows+i ):
    #        print("+",end="") 
    for j in range(rows+1,rows+i)  :
        print(" ",end="")
        
    for j in range(rows, m-1 ):
        if i + 4 == j  :
            print("*",end="")
         

  
    print()

for i in range(rows-1,rows):
    for j in range(0,m-1):

        print("*",end="")
    print()
