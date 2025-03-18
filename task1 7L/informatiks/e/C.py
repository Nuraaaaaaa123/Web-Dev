def xor(x, y):
    return int(x != y)

x, y = map(int, input().split())
print(xor(x, y))
