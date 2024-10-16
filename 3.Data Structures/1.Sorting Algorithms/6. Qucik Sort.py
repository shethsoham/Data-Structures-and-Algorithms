#Quick Sort : 

'''
It doesnot uses extra temporary array 
Pick a pivot and place it correctly samller on left bigger on right
'''


def quick_sort(arr,low,high):
    if low<high:
            partition = partition_function(arr, low, high)
            quick_sort(arr, low, partition-1)
            quick_sort(arr, partition+1, high)
        
def partition_function(arr, low, high):
    pivot = arr[low]
    i = low
    j = high 
    while i<j:
        while (i<=high and arr[i]<=pivot):
            i = i +1
        while( j >=low and arr[j]>pivot):
            j = j -1
        if (i<j):
            arr[i],arr[j]= arr[j], arr[i]
    
    arr[low],arr[j] = arr[j], arr[low]
    return j

arr = [4, 6, 2, 5, 7, 9, 1, 3]
quick_sort(arr, 0, len(arr) - 1)
print(arr)