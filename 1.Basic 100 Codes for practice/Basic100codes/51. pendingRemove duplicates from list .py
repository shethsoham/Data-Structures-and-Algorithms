#Remove duplicates from list 

List = [1,2,3,4,5,6,1]


for i in List :
    j = i + 1
    for j in List :
        if i == j :
            List.remove(j)
            

print( List )