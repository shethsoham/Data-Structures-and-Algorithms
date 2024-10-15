#Here the time complexity will be O(2N)but optimal will be just a single pass
'''
So here we can see that 
that we two times used a for loop 
first pass and second pass

'''

a = [3,4,2,1,7,6,3,4,5] 
largest = a[0]
n = len(a)
for i in range(1,n-1):
    if a[i]>largest:
        largest = a[i]

print(largest)

second_largest = -1 # Considering all the number are positive 

for i in range(0,n-1):
    if (a[i]>second_largest and a[i]!= largest):
        second_largest = a[i]
print(second_largest)