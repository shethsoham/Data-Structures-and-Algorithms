#Check if array is sorted - T.C. - O(n)
def function_1():
    a = [1,2,3,4,5,8,9]
    n = len(a)
    for i in range(0,n-2):
        if (a[i]<=a[i+1]):
            pass
        else :
            return False
        
        return True

result = function_1()
print(result)