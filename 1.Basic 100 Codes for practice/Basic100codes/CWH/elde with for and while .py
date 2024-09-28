# using else with for and while 

for i in range(5):
    print(i)
else:
    print("No")


# No else statement will execute as break statement breaks the loop 
for i in range(5):
    print(i)
    if i == 3 :
        break 
else:
    print("No")

i=0
while i < 5 :
    print(i)
    i = i + 1 
else : 
    print("No")

i=0
while i < 5 :
    print(i)
    i = i + 1 
    if i == 3 :
        break
else : 
    print("No")
