N = int(input())
count = 0

for _ in range(N):
    if int(input()) == 0:
        count += 1

print(count)
