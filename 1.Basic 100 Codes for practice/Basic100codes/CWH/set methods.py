# sets
'''
1. Union 
2. Intersection 
'''

s1 = {1,2,6,7}
s2 = {4,5,6}

print(s1.union(s2))
#print(s1, s2)
#s1.update(s2)# Changing s1 value  

#print(s1, s2 )
print(s1.intersection(s2))
print(s1.difference(s2))
print(s1.isdisjoint(s2))

print(s1.pop())
print(s1)
print(s1.add(5))
print(s1.difference(s2))
print(s1.isdisjoint(s2))

s1.remove(6)
print(s1)

s1.discard(8)
print(s1)

s1.add(20)
print(s1)

