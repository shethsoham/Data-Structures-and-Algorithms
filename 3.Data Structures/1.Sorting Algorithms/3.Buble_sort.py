'''
input_array = [8,3,2,1,5]

'''


arr= [8,3,2,1,5]
n = len(arr) 

for i in range (n,0,-1):
    no_of_swap = 0
    for j in range(0,i-1):
        
        if arr[j]>arr[j+1]:
            temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1]=  temp
            no_of_swap = no_of_swap+1
        if no_of_swap == 0:
            break

print(arr)


