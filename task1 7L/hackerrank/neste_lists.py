students = []
grades = set()

n = int(input())

for _ in range(n):
    name = input()
    grade = float(input())
    students.append([name, grade])
    grades.add(grade)

second_lowest = sorted(grades)[1]

second_lowest_students = [name for name, grade in students if grade == second_lowest]

for name in sorted(second_lowest_students):
    print(name)
