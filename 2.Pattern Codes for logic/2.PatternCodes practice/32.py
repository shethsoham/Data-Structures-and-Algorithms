'''

            A  
           B C  
          D E F  
         G H I J  
        K L M N O  
       P Q R S T U  
      V W X Y Z [ \  

'''

rows = 7
middle = rows-1

ascii = 65

for i in range(0,rows):
    for j in range(0,middle-i):
        print(" ",end="")
    for j in range(0,i+1):
        character = chr(ascii)
        print(f"{character} ",end="")
        ascii = ascii + 1
    print()

