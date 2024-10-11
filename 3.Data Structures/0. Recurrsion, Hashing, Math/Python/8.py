def nStarTriangle(n: int) -> None:
    # Write your code here.
    for i in range(0,n):
        for j in range(0,i):
            print(" ",end="")
        for j in range(i+1,n):
            print("*",end="")
        for j in range(i,n):
            print("*",end="")
        for j in range(n-i,n):
            print(" ",end="")
        print()
        pass