'''

*  
* *  
* * *  
* * * *  
* * * * *  
* * * * * *  
 
* * * * * *  
* * * * *  
* * * *  
* * *  
* *  
* 

'''

rows = 5
for i in range(0,rows):
    for j in range(0,i+1):
        print("*",end="")
    print()

print()

for i in range(0,rows):
    for j in range(0,rows-i):
        print("*",end="")
    print()