'''

program to find the maximum and minimum in an array
'''

a = [1,423, 6,46,34,23,13,53,4]

sorted_array = sorted(a)

minimum = sorted_array[0]
maximum = sorted_array[-1]

print("The maximum number in an array is in O(nlogn)",maximum)
print("The minimum number in an array is in O(nlogn)",minimum)

# here the time complexity is O(nlogn)

a = [1,423, 6,46,34,23,13,53,4]
n = len(a)
def get_max(a,n):
    res = a[0]
    for i in range(0,n):
        res = max(res,a[i])
    return res

def get_min(a,n):
    res = a[0]
    for i in range(0,n):
        res = min(res,a[i])
    return res

print("The maximum number in an array is in O(n) ",get_max(a,n))
print("The minimum number in an array is in O(n)",get_min(a,n))