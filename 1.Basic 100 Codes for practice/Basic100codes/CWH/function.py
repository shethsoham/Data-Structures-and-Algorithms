#Functions 

#Writing code for calculator using functions 
'''
Functions : To use the same logic multiple times
1) def function():
2) pass
3) parameters 
4) arguments
5) function declaration
6) function call
7) Built in function    // No need to write def keyword 
  len(), print(), range(), args()
8) User define function // Need to create function using def keyword
9) Return Statement  : wapas chale jaoo value lekar 
                        should return 1 or if there are more return statement  it will take the first value 
10) Call function 

4 types of arguments 
1) Default Argument  : order matters
2) keyword Argument   : order does not matter 
3) Variavle-length Argument
4) Required Argument
----------------------------------------------------------------------------------

Write a code for calculator using functions 

1) add , sub , mul , divide , greater than , less than 
2) define all 4 types of argument  with diffrent examples 
3) define parameter , argument
4) return statement
5) pass statement 
6) Bulit in function


'''

# Calculator code using functions 

# user define functions 
def addition (a,b):
    addition = a + b 
    print ("The addition is ", addition) # built in function def 

def subtraction (c,d):
    subtraction = c - d 
    print ("The subtraction is ", subtraction) # built in function def 
    
def multiply (x,y):
    multiply = x * y 
    print ("The multipliaction is ", multiply) # built in function def 
#Function call 

def division ():
    pass

addition(5,6)
multiply(5,6)
subtraction(6,5) 
division()

'''
Types of Argument 
1) Default Argument 
2) keyword Argument 
3) Variable-Length Argument
4) Required Argument

'''
# 1) Default Arguemnt 
def average (a = 1, b = 2):
    avg = (a + b)/2
    print(avg)

average()
average(a=2)
average(b = 4)

def greater(p,q):
    if p >= q :
        print(p,"is greater")
    else:
        print(q,"is greater")

greater(10,11)


def lesser(p,q):
    if p < q :
        print(p,"is lesser")
    else:
        print(q,"is lesser")

lesser(p = 20 ,  q= 30)

# 2) keyword argument  :  order does not matter

def avg (a,b):
    avgerage = (a+b)/2
    print(avgerage, "Average is")

avg(b = 6 , a = 2)

#3) Required Argument 

def average3 (a, b = 1):
    average = (a+b)/2
    print("Average3 is ", average)

average3(a = 4 )# required argument

#4) Variable length argument

'''
* for tuple
** for dictonary 
'''

def average4 (*number):
    sum = 0 
    # print(type(number))
    for i in number:
        sum = sum+i 

    c=  sum /len(number)
    return c

average4(1,2,3,4)

# def average5 (**number):
#     sum = 0 
#     # print(type(number))
#     for i in number:
#         sum = sum+i 

#     c=  sum /len(number)
#     return c

# result = average5( key1:1,key2:2,key3:3,key4:4)
# print("Average5 is",result)

