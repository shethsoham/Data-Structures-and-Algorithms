#Code for convertion of scale:

#1 cm = 0.393 inches
#1 km = 0.621
#1 litre = 0.264172 
# 1 INR = 0.012



# 1 inch is equal to 2.54 centimeters.
# 1 gallon is equal to approximately 3.785 liters.
# 1 mile is equal to approximately 1.609 kilometers.\
# 1 USD is equal to 82.38 rupees


welcome_statement = int(input('''Choose what decision you want to make 
1. Connvert cm to inches 
2. Convert km to miles 
3. Convert litres to Gallon
4. Convert INR to USD 
5. Exit
'''))

if welcome_statement == 1 :
    
    cm = float(input("How much cm you want to convert to inches ?"))
    inches  = 0.393 * cm 
    print("Eqivalent value in inches is ", inches )

elif welcome_statement == 2 :
    
    km = float(input("How much km you want to convert to miles ?"))
    miles  = 0.621 * km 
    print("Eqivalent value in , miles is ", miles ) 

elif welcome_statement == 3 :
    
    litres = float(input("How much litre you want to convert to galon ?"))
    galons  = 0.264 * litres 
    print("Eqivalent value in , gallon  is ",galons )

elif welcome_statement == 4 :
    
    rs = float(input("How much rs you want to convert to USD ?"))
    USD  = 82.38 * rs 
    print("Eqivalent value in ,rs is ", USD )

elif welcome_statement == 5 :
    print("Exit the operation")

else :
    print("Wrong Input process terminated")