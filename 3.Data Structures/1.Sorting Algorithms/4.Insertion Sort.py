#Insertion Sort : Take an  item an place it in its correct order

arr= [8,3,2,1,5]
n = len(arr)

for i in range(1,n):
    j = i 
    while j>0 and arr[j-1]>arr[j]:
        arr[j-1],arr[j] = arr[j], arr[j-1]
        j= j-1

    
print(arr)
