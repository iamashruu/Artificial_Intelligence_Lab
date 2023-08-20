# def initialize_towers(num_disks):
#     return [[i for i in range(num_disks, 0, -1)], [], []]


# def display_towers(towers):
#     print("Towers:")
#     for i, tower in enumerate(towers):
#         print(f"Tower {i + 1}: {', '.join(map(str, tower))}")
#     print()


# def move_disk(towers, source_tower, target_tower):
#     disk = towers[source_tower].pop()
#     towers[target_tower].append(disk)
#     display_towers(towers)
#     check_win(towers)


# def check_win(towers):
#     if not towers[0] and not towers[1]:
#         print("Congratulations! You've solved the Tower of Hanoi!")
#         quit()


# def prompt_move(towers):
#     input_str = input("Enter source tower and target tower (e.g., 1 3): ")
#     source, target = map(int, input_str.split())

#     if 1 <= source <= 3 and 1 <= target <= 3 and source != target:
#         if not towers[source - 1]:
#             print("Source tower is empty. Choose a different source.")
#             prompt_move(towers)
#         elif not towers[target - 1] or towers[source - 1][-1] < towers[target - 1][-1]:
#             move_disk(towers, source - 1, target - 1)
#             prompt_move(towers)
#         else:
#             print(
#                 "Invalid move. Larger disk cannot be placed on top of a smaller disk."
#             )
#             prompt_move(towers)
#     else:
#         print("Invalid input. Enter valid source and target towers.")
#         prompt_move(towers)


# num_disks = 3  # Change this value to the desired number of disks
# towers = initialize_towers(num_disks)
# display_towers(towers)
# prompt_move(towers)

towers = [[], [], []]


def initialize_towers(num_disks):
    for i in range(num_disks, 0, -1):
        towers[0].append(i)


def display_towers(source, target):
    if source is not None:
        move_description = "Move: {} to {}".format(source + 1, target + 1)
    else:
        move_description = ""
    print(move_description)

    for i in range(3):
        tower_content = ", ".join(map(str, towers[i]))
        print(f"Tower {i+1}: {tower_content}")
    print()


def move_disk(source_tower, target_tower):
    disk = towers[source_tower].pop()
    towers[target_tower].append(disk)
    display_towers(source_tower, target_tower)
    check_win()


def check_win():
    if len(towers[0]) == 0 and len(towers[1]) == 0:
        print("Congratulations! You've solved the Tower of Hanoi!")
        quit()


def prompt_move():
    input_str = input("Enter source tower and target tower (e.g., 1 3): ")
    source, target = map(int, input_str.split())

    if 1 <= source <= 3 and 1 <= target <= 3 and source != target:
        if len(towers[source - 1]) == 0:
            print("Source tower is empty. Choose a different source.")
            prompt_move()
        elif (
            towers[target - 1] == [] or towers[source - 1][-1] < towers[target - 1][-1]
        ):
            move_disk(source - 1, target - 1)
            prompt_move()
        else:
            print(
                "Invalid move. Larger disk cannot be placed on top of a smaller disk."
            )
            prompt_move()
    else:
        print("Invalid input. Enter valid source and target towers.")
        prompt_move()


num_disks = 3
initialize_towers(num_disks)
display_towers(None, None)
prompt_move()
