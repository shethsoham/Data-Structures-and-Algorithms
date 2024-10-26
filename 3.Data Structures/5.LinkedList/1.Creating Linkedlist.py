#Linked list 
'''
What is Linked list ?

Array is stored in contigous location(Array is  easy to travel index wise)
You cannot increase/ decrease size of array
Therefore this is where LinkedlIST comes in.

'''
#Creating structure of Data
class Node:
    def __init__(self,data):# Creating Constructor.
        self.data = data
        self.next = None

#Creating Nodes

node1 = Node(10)
node2 = Node(20)
node3 = Node(30)
node4 = Node(40)

#Printing Linked List

current = node1
while current is not None :
    print(current.data , end="->")
    current = current.next
print("None")