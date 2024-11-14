arr1 = [1,2,3]
arr2 = [4,5,6]

# using 2 pointer techinique 

merging_array = []
i = 0
j = 0 

while (i < len(arr1) and j < len(arr2)):
    if arr1[i] < arr2[j]:
        merging_array.append(arr1[i])
        i = i + 1

    else :
        merging_array.append(arr2[j])
        j = j + 1

while i < len(arr1):
    merging_array.append(arr1[i])
    i = i + 1

while j < len(arr2):
    merging_array.append(arr2[j])
    j = j + 1


print(merging_array)