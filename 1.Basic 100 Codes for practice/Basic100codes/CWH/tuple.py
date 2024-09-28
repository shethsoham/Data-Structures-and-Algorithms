# Tuple

#Tuple is immutable
# It  can take values of diffrent datatypes
#strings are also immutable

tup = (1,2,3,"Soham")
print(type(tup),tup)

tup1 =(1,)             # If you want to create the tuple and leave it youshould be doing this comm at the last
print(type(tup1),tup1)

tup2 = (1)
print(type(tup2),tup2)


tup[0]= 0   # does not support as immutable
print(tup)

# How to manipulate the tupe .. 

'''
you must convert tuple to list then make changes and then finally convert it back to tuple
'''
#count
#index

