'''
*
* *
* * *
* * * * 
* * * * *

'''

def nForest(n:int) ->None:
    # Write your solution here.
    for i in range(0,n):
        for j in range(0,i+1):
            print("* ",end="")
        print("")
    pass

nForest(n=int(input("enter the number you want")))