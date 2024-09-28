# # Chech the weather conditions 

# temperature(celcius)   >=30   >=30   <30   <30
# Humidity(%)            >=90    <90   >=90  <90 
# weather                H&h     Hot    C&h  Cold

# H&h = Hot and humid 
# C&h = Cold and humid 

temp = float(input("Enter the temperature in celcius"))
humidity = float(input("Enter the humidity in % "))


if temp >= 30 and humidity >=90:
    print("It's Hot and humid")

elif temp>=30 and humidity < 90:
    print("It's Hot")

elif temp < 30 and humidity >=90:
    print("It's Cold and Humid")

elif temp < 30 and humidity < 90 :
    print("It's cold")

else:
    print("The inputs you enetered are wrong")