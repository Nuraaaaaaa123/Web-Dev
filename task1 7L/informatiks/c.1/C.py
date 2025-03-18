import math

a = int(input())
b = int(input())

for num in range(a, b + 1):
    if int(math.sqrt(num)) ** 2 == num:
        print(num, end=" ")
