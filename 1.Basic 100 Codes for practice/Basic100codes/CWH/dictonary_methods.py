ep1 = {1 : "soham" , 2 : "pranali" , 3: "aman" }
ep2 = {4: "mahesh" , 5 : "ashish"}
ep3 = {6: "leena", 7 : "manish"}

# combining two dictonary under the name of ep1 

ep1.update(ep2)
print(ep1)
ep3.clear()
print(ep3)

ep4={}
print(ep4)

ep1.pop(1)
print(ep1)

ep1.popitem()
print(ep1)

del ep1[2]
print(ep1)

