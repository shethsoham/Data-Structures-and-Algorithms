'''

#size 3

----c----
--c-b-c--
c-b-a-b-c
--c-b-c--
----c----

'''
size = 5
num = size
for i in range (0,size):
    for j in range(0,size-1-i):
        print("--",end="")
    for k in range (0,i+1):
        for j in range(0,1):
            print(f"{num}-",end="")
            num = num -1
    print()
num = size
for i in range (0,size):   
    for j in range (0,i):
        print(f"{num}-",end="")
        num = num + 1
    num = size - i - 1
    print()
    
