# Selection Sort : Take the minimum and swap
#T.C - O(N(square)) - O(N**2)
#SC : 

a =[3,5,6,2,1,9]

#selection sort 
n = len(a)                                                                                                                                                                                                                                                                     
for i in range(0,n-1):
    
    for j in range(i,n):
        if a[i] > a[j]:
            temp = a[i]
            a[i]= a[j]
            a[j]=  temp
        
    
print("Sorting done using selection sort",a)                                                           