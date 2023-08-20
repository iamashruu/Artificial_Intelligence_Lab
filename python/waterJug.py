jugACapacity = int(input("Enter Jug A Capacity: "))
jugBCapacity = int(input("Enter Jug B Capacity: "))
jugAWater = int(input("Initially Water in Jug A: "))
jugBWater = int(input("Initially Water in Jug B: "))
jugAFinal = int(input("Final State of Jug A: "))
jugBFinal = int(input("Final State of Jug B: "))

count = 0
print(
    "Operations:\n 1. Fill A\n 2. Fill B\n 3. Empty A\n 4. Empty B\n 5. Pour A => B\n 6. Pour B => A"
)
while jugAWater != jugAFinal or jugBWater != jugBFinal:
    operation = int(input("Enter the Operation: "))
    count += 1
    if operation == 1:
        jugAWater = jugACapacity
    elif operation == 2:
        jugBWater = jugBCapacity
    elif operation == 3:
        jugAWater = 0
    elif operation == 4:
        jugBWater = 0
    elif operation == 5:
        jugAWater, jugBWater = jugAWater - min(
            jugAWater, jugBCapacity - jugBWater
        ), jugBWater + min(jugAWater, jugBCapacity - jugBWater)
    elif operation == 6:
        jugBWater, jugAWater = jugBWater - min(
            jugBWater, jugACapacity - jugAWater
        ), jugAWater + min(jugBWater, jugACapacity - jugAWater)
    else:
        print("Invalid operation. Please enter a valid operation number.")
    print(f"Jug A: {jugAWater} L, Jug B: {jugBWater} L, Operation: {operation}")

print("Desired state reached!")
print(f"You have tried {count} times to reach the goal")
