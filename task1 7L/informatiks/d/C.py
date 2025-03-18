N = int(input())
arr = list(map(int, input().split()))

positive_count = sum(1 for num in arr if num > 0)

print(positive_count)
