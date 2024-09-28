'''
Here is the Brute force algorithm for sorting of the elements

'''

input_array = [8,3,2,1,5]
#expected output array = [1,2,3,5,8]

n = len(input_array)
for i in range(0,n):
    for j in range(i+1,n):
        if input_array[i]>input_array[j]:
            temp = input_array[i]
            input_array[i] = input_array[j]
            input_array[j]=temp

print("Sorting the array in a brute force way is with a time complexity of O(N^2)",input_array) 