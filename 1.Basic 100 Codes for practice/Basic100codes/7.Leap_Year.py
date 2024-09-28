#Is it a leap year 


year = int(input("Enter a year you want to  check"))

if (year % 4 ==0 and year % 100 != 0 ):
    print("It is a leap year ")

else:
    print("It is not a leap year")