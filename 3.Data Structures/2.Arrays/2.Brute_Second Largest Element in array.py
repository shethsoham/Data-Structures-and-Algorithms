# Brute force solution 

'''
Sorting the array 
and then returning a[n-2] but here we know answer won't be right as a[1,7,7,7,7,7,7] it will 
return 7 but answer should be 1
'''

# Now here we see that we can write the code as if largest will be at the last of the index 
# the if we compare a[n-i] != largest then it will give us secong largest number which means we need to reverse loop 
# backword but again the  case arises where it can happen that it is the first place or the second largest doesnot exist
# For example [7,7,7,7,7]

# The Brute force code 
#Here you will get the algoirthm wrong [2,2,2,2,2,2]
def main ():

    a = [7,7,7,7,7] # Error [7,7,7,7,7,7]
    a.sort()
    # we sorted the array above 
    # now
    n = len(a)
    largest = a[n-1]
    second_largest = None
    for i in range(n-2, -1 , -1 ):
        if a[i] != largest:
            second_largest = a[i]
            break
    
    
    if second_largest is None:
        return "No second largest element found"
    return second_largest

result = main()
print(result)

#T.C = O(nlogn + n)

'''
The error you're encountering (UnboundLocalError: cannot access local variable 'second_largest')
 occurs because the variable second_largest is not initialized before the if statement in certain edge cases, 
 such as when all elements in the array are the same.
'''
#---------------------------------------------------------------#
#Here you will get the algoirthm wrong [2,2,2,2,2,2]


