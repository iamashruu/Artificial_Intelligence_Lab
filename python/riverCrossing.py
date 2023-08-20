left_side = ["M", "L", "G", "C"]
right_side = []

print("Before Process")
print("Elements in the Left Side Bank:", left_side)
print("Elements in the Right Side Bank:", right_side)

while True:
    print(left_side[1], left_side[2], left_side[3], "Select any one")
    item = input("Enter item:").upper()

    if left_side[1] == item and left_side[2] == "G" and left_side[3] == "C":
        print("Goat will eat cabbage.")

    if left_side[2] == item and "C" in left_side and "L" in left_side:
        right_side.append(item)
        left_side[2] = " "
        # print(left_side, right_side)

    if "G" in right_side and "L" in left_side and left_side[3] == item:
        print("goat will be returned to left_side")
        left_side[2] = right_side[0]
        right_side[0] = item
        left_side[3] = " "
        # print(left_side, right_side)

    if "G" in right_side and "C" in left_side and left_side[1] == item:
        print("goat will be returned to left_side")
        left_side[2] = right_side[0]
        right_side[0] = item
        left_side[1] = " "
        # print(left_side, right_side)

    if "C" in right_side and "L" in left_side and left_side[2] == item:
        print("cabbage will be returned to left_side")
        left_side[3] = right_side[0]
        right_side[0] = item
        left_side[2] = " "
        # print(left_side, right_side)

    if "C" in right_side and "G" in left_side and left_side[1] == item:
        right_side.append(item)
        left_side[1] = " "
        print(left_side, right_side)

    if "L" in right_side and "G" in left_side and left_side[3] == item:
        right_side.append(item)
        left_side[3] = " "
        # print(left_side, right_side)

    if "L" in right_side and "C" in left_side and left_side[2] == item:
        print("Lion will be returned to left_side")
        left_side[1] = right_side[0]
        right_side[0] = left_side[2]
        left_side[2] = " "
        # print(left_side, right_side)

    if left_side[2] == item and left_side[3] != "C" and left_side[1] != "L":
        right_side.append(left_side[2])
        right_side.append("M")
        left_side[2] = " "
        left_side = []
        print("Goal is reached")
        break

    if left_side[3] == item:
        print("Lion eats goat")


print("After Process")
print("Elements in the Left Side Bank:", left_side)
print("Elements in the Right Side Bank:", right_side)
