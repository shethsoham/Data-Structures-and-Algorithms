# Factorial using RECURSION 

# Recursions are basically functions only 
# You can call same function inside them again and again it is call recursion.

#Factorial(7) = 7*6*5*4*3*2*1
# 6! = 6*5*4*3*2*1 
#5!
#4
#.
#.
# 0! = 1

#factorial (n) = n * factorial(n-1)

def factorial(n):
    if (n == 0 or n ==1 ):
        return 1 
    else :
        return n * factorial(n-1)


print(factorial(5))
print(factorial(10))

#Write a program to print Fibonaci sequence 

def fibo (n):
    
    if n == 0 :
        return 0 
    elif n ==1 :
        return n 
    else : 
        return fibo(n-1)+ fibo(n-2)
    
print(fibo(6))