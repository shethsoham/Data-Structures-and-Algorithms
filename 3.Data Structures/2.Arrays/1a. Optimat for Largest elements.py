

#Optimal solution 
'''
TC : O(n)
SC : O(1)
'''


def main(a):
    largest = a[0]
    n = len(a)
    for i in range (0,n):
        if a[i]>largest:
            largest = a[i]
    
    return largest 

result = main([2,3,4,6,1,1,5,3,1])
print(result)


    