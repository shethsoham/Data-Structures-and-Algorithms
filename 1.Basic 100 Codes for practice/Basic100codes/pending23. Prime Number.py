#Prime number


#find out if the number is prime or not
def prime_checker(number):
    for i in range(2,int(number/2)+1):


        if number % i == 0 :
            print(number,"is not a prime number ")
            break
    else:
        print(number,"is a prime number")


##____________________________________________##
n = int(input("enter the number yoyu want to check  : "))
if n == 1:
    print("It is prime number")
else :
    prime_checker(number = n)
num = int(input("Enter the number you want to check: "))

if num < 2:
    print("It is not a prime number")
else:
    is_prime = True
    for i in range(2, int(num/2) + 1):
        if (num % i) == 0:
            is_prime = False
            break

    if is_prime:
        print("It is a prime number")
    else:
        print("It is not a prime number")
