dictonary  = { 
         1: "soham" ,
         2: "pranali" ,
         3: "aman",
         4: "gagan"  
         }

print(dictonary[4]) # will give error if not found 
print(dictonary)
print(dictonary.keys())
print(dictonary.values())
print(dictonary.get(1))# will give none if not found
# so if you want to throw error and if you don;t want to throw error do the following things as mentioned 

# for loop
for j in dictonary.values():
    print(j)
for i in dictonary.keys():
    print(i)


print(dictonary.items())

for keys , values in dictonary.items():
    print(f"My roll number is {keys}  and my name is {values} ")