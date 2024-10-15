# Finding secong largest element in an array :
'''
The optimal solution here is to find the second largest is
so the the loop will iterate only once instead of so it will save time for of sorting 
which of O(nlogn)

By common sense :
If somenone becomes new largest
the previous largest automatically becomes the second largest 

'''
import sys
a = [2,7,4,3,5,6,3]
largest = a[0]
s_largest = -sys.maxsize -1
n = len(a)

for i in range(1,n-1,1):
    if (a[i]>largest):
        s_largest = largest
        largest = a[i]
    elif (a[i]<largest and a[i]>s_largest):
        s_largest = a[i]
    
print(s_largest)
