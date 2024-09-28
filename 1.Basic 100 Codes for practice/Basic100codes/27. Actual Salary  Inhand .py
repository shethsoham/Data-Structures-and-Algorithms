#Inhand Salary 

'''
If the salary is below 5 lakh complete salalry inhand.
If the salalry is between 5 lakh and 20 lakh 18 perecent tax , 3 percentage gst, 5 % tds
If salalry above 20 lakhs then 25 % tax , 6 % tds , 4 % gst 

'''

income = float(input ("Enter your income on paper"))
inhand = 0 

if income < 500000 :
    inhand=income 
    print("Your Income is your Inhand amount ", income)

elif income > 500000 and income < 2000000 :
    tax = income * 82 /100
    gst = income * 97 /100
    tds = income * 95/100
    inhand = tax + gst + tds 
    print("After deletition in tax, your actual salary inhand is you come in medium ", inhand)

else :
    tax = income * 75 /100
    gst = income * 94 /100
    tds = income * 96/100
    inhand = tax + gst + tds 
    print("After deletition in tax, your actual salary inhand is ", inhand)