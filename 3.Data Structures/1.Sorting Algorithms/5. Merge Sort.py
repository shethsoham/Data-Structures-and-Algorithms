#Merge sort 
#O(N logN)
# In order to stop recurrsion we need to give some base condition.

'''
Merge Sort = Divide and Merge 
odd - divide bigger 1 element here and 1 eleemnt here smaller
even : half and d
half
'''
#Pseudo

arr = [3,2,4,1,3]
def merge_sort(arr, low, high):
    if low<high:
        mid = (low+high)//2
        merge_sort(arr,low,mid)
        merge_sort(arr,mid+1,high)
        merge(arr,low,mid,high)

def merge(arr,low, mid, high):
    temp =[]
    left = low
    right = mid + 1
    while (left<=mid and right<=high):
        if (arr[left]<=arr[right]):
            temp.append(arr[left])
            left = left +1
        else :
            temp.append(arr[right])
            right = right + 1
    while (left<=mid):
        temp.append(arr[left])
        left = left +1
    while (right<=high):
        temp.append(arr[right])
        right = right + 1
    for i in range(low, high+1):
        arr[i]= temp[i-low]


merge_sort(arr, 0, len(arr)-1)
print(arr)
