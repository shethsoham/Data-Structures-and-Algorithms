# Finally clause nect step towards exceptional handling topic 
'''
whatever you write in finally keyword will forsure get executed even though you are having error in the code
this is where you use the finally keyword 
even if you go to try or except the finally keyword will always get executed 
'''
# Especially done when writing code in finction

'''
try:
    # Code block where an exception might occur
except SomeException:
    # Exception handling code
finally:
    # Code block that will always be executed

'''
def functions():
    try : 
        num = int(input("Enter the "))
        l = [1,2,3,4]
        print(l[num])
        print("Try getting executed")
        return 0

    except :

        print("Exception getting executed some error occured")
        return 1
    finally :
        print("I am always executed")

    print("I wont be always executed if ")

x = functions()
print(x)