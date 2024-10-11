def nNumberTriangle(n: int) -> None:
    # Write your solution here.
    for i in range(0,n):
        num = 1
        for j in range(0,n-i):
            print(num,end=" ")
            num = num +1
        print()
    pass