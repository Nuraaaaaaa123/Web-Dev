n = int(input())
student_marks = {}

for _ in range(n):
    name, *line = input().split()
    student_marks[name] = list(map(float, line))

query_name = input()

average = sum(student_marks[query_name]) / len(student_marks[query_name])
print(f"{average:.2f}")
