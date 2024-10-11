def seeding(n: int) -> None:
    # Write your solution here.
    for i in range(0,n):
        for j in range(0,n-i):
            print("*",end=" ")
        print()
    pass