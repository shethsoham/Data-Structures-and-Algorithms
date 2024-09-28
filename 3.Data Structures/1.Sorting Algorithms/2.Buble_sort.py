'''
input_array = [8,3,2,1,5]

'''


arr= [8,3,2,1,5]
n = len(arr)

for i in range(0,n-1):
    for j in range(0,n-i-1):
        if arr[j]>arr[j+1]:
            temp = arr[j]
            arr[j]= arr[j+1]
            arr[j+1]=temp

print(arr)