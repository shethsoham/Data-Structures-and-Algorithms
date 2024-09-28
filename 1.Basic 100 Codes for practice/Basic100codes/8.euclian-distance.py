#Euclian distance

x1 = float(input("enter the x1 coordinate "))
x2 = float(input("enter the x2 coordinate "))

y1 = float(input("enter the y1 coordinate "))
y2 = float(input("enter the y2 coordinate "))

E_distance = ((x2-x1)**2 + (y2-y1)**2 )**0.5

print("Euclian distance", E_distance)