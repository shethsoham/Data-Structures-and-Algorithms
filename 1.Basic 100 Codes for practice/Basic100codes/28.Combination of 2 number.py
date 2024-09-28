#Code for writing combination of two number and not repeating the duplicates 


input2= int(input("Enter the input from where you want the combination, it will be only positive numbers "))
#inout2 = 4 
for i in range(1,(input2+1)):
    for j in range(1,(input2+1)):
        if i != j :
            print("The combination of i and j is ",i,j)


