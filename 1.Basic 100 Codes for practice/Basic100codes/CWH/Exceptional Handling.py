'''

# It is done so that our program keeps on executing and should not hault in betweem 

Exceptional handling is done to execute the code completely and to find if there are any chances that the code will have some kind of error 
then it should stop there give us the line where error occured and continue next lines
you can use try and except:

try 

except 
'''
#----------------------------------------------------------------------------------------
try : 
    
    num = int(input("enter the number"))
    array=[1,2,3]
    print(array(num))
except ValueError :
    print("Its a value error")
except IndexError:
    print("Its a Index error")


a =  (input('Enter the table you want to print '))

# here user can make error instead of giving int it can give some character therefore 
try: 
    for i in range(1,11):
        print(f"{int(i)}*{int(a)}={int(a)*i}")

except Exception as e :
    print(e)

print("We are in the middle of the code ")
print("We are at the end of the code")

# ------------------------------------------------------------------------------------------------------

a =  (input('Enter the table you want to print '))

# here user can make error instead of giving int it can give some character therefore 
try: 
    for i in range(1,11):
        print(f"{int(i)}*{int(a)}={int(a)*i}")

except :
    print("Sorry we are not doing good above s")

print("We are in the middle of the code ")
print("We are at the end of the code")