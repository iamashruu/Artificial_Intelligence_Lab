class Node:
    def __init__(self, n_value):
        self.value = n_value
        self.children = []

def dfs(root):
    stack = [root]
    result = []

    while stack:
        node = stack.pop()
        # result.append(node.value)

        # Append children to the stack in reverse order
        for child in reversed(node.children):
            stack.append(child)
        result.append(node.value)

    return result

def build_tree():
    root_value = input("Enter the root node value: ")
    root = Node(root_value)
    stack = [root]

    while stack:
        node = stack.pop()

        child_Num = int(input(f"Enter the number of children for node {node.value} (or 0 if it has no children): "))
        for k in range(child_Num):
            child_value = input(f"Enter the value for child {k+1} of node {node.value}: ")
            child_node = Node(child_value)
            node.children.append(child_node)
            stack.append(child_node)

    return root

root = build_tree()
result = dfs(root)
print(f"The result of DFS Search for the given tree is: {result}")
