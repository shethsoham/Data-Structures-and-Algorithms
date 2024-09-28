#Print the simple intrest

# Formula 
# S.I. = P*R*T / 100
# Principle amount , Rate of Intrest, Time 

principle = float(input("Enter the priciple amount"))
ROI = float(input("Enter the ROI"))
Time = int (input("Enter the time period"))

simpple_intrest = principle*ROI*Time/100

print("Simple intrest is", simpple_intrest)

final_amount = simpple_intrest + principle
print("Finally the final amount is ", final_amount)