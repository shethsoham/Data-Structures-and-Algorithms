'''
Input: original_array[] = {1, 2, 3} 
Output: array_reversed[] = {3, 2, 1}

Input: original_array[] = {4, 5, 1, 2}
Output: array_reversed[] = {2, 1, 5, 4}

'''

input_array =[4, 5, 1, 2]
n = len(input_array)
output_array = []

output_array = []
for j in range(n-1,-1,-1):
    output_array.append(input_array[j])

print("Output array is ",output_array)
