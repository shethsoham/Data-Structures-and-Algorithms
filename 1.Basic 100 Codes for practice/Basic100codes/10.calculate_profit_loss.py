# Calculate the profit and loss between cost -price and selling price


cost_price = float(input("enter the cost price"))
selling_price = float(input("enter the selling price"))

if cost_price < selling_price : # If condition
    profit = selling_price - cost_price
    print(type(profit))
    print("It is a profit and the the amound is ", profit )

else:
    loss = cost_price - selling_price
    print(type(loss))
    print("It is a loss and the the amound is ", loss )