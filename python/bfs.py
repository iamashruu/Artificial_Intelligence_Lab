class Node:
    def __init__(self, n_value):
        self.value = n_value
        self.children = []


def bfs(root):
    queue = [root]
    result = []

    while queue:
        node = queue.pop(0)
        result.append(node.value)
        for child in node.children:
            queue.append(child)
    return result


def build_tree():
    root_value = input("Enter the root node value: ")
    root = Node(root_value)
    queue = [root]

    while queue:
        node = queue.pop(0)

        child_Num = int(
            input(
                f"Enter the number of children for node {node.value}(or 0 if it has no children): "
            )
        )
        for k in range(child_Num):
            child_value = input(
                f"Enter the value for child {k+1} of node {node.value}: "
            )
            child_node = Node(child_value)
            node.children.append(child_node)
            queue.append(child_node)

    return root


root = build_tree()
result = bfs(root)
print(f"The result of BFS Search for given tree is : {result}")
